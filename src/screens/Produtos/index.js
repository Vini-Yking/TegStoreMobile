import {
  View,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import {
  getProdutoByName,
  getAllProdutosPaginados,
  deleteProduto,
} from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { CardProduto } from "./components/CardProduto";
import { BotaoAdicionar } from "../../components/BotaoAdicionar/index.js";
import { FooterList } from "./components/FooterList/index.js";
import { BotaoPesquisa } from "../../components/BotaoPesquisa/index.js";

export const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [primeiraVez, setPrimeiraVez] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [apagando, setApagando] = useState(false);
  const { categorias } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [acabou, setAcabou] = useState(false);

  const handleBuscaPaginada = async () => {
    if (loading) return;
    if (acabou) return;
    setLoading(true);
    console.log(page);
    const pageSize = 15;
    if (nomeProduto.length === 0) {
      const produtos = await getAllProdutosPaginados(page, pageSize);
      console.log(produtos);
      if (produtos.data.content.length < pageSize) setAcabou(true);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
    } else {
      const produtos = await getProdutoByName(nomeProduto, page, pageSize);
      console.log(produtos);
      if (produtos.data.content.length < pageSize) setAcabou(true);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
    }
    setPage((page) => page + 1);
    setLoading(false);
  };

  const handlePesquisa = () => {
    setAcabou(false);
    setListaProdutos([]);
    setPage(0);
    setNomeProduto(pesquisa);
  };

  useEffect(() => {
    handleBuscaPaginada();
  }, [apagando, nomeProduto]);

  const handleNavigation = (item) => {
    navigation.navigate("DetalhesProduto", {
      produto: { item },
    });
  };

  const handleEditar = (item) => {
    navigation.navigate("Cadastro", {
      produto: { item },
    });
  };

  const handleCriar = () => {
    navigation.navigate("Cadastro", {
      produto: "",
    });
  };

  const handleDelete = async (item) => {
    setListaProdutos([]);
    const response = await deleteProduto(item.idProduto);
    setPage(0);
    !apagando ? setApagando(true) : setApagando(false);
    if (loading) return;
    Alert.alert("Produto excluido com sucesso!");
  };

  return (
    <>
      <SafeAreaView style={styles.containter}>
        <View style={styles.headerContainer}>
          <BotaoLogout />
          <Text style={[AppStyles.title, { marginTop: 3 }]}>Categoria: x</Text>
          <View style={styles.pesquisaContainer}>
            <TextInput
              placeholder="Buscar"
              style={[styles.input, AppStyles.text]}
              value={pesquisa}
              onChangeText={setPesquisa}
            ></TextInput>
            <BotaoPesquisa onPress={handlePesquisa} />
          </View>
          <BotaoAdicionar onPress={handleCriar} />
        </View>

        <SafeAreaView style={styles.produtosContainer}>
          <FlatList
            style={{ width: "100%" }}
            data={listaProdutos}
            showsVerticalScrollIndicator={true}
            onEndReached={handleBuscaPaginada}
            renderItem={({ item }) => (
              <CardProduto
                nomeProduto={item.nomeProduto}
                valorUnitario={item.valorUnitario}
                categoria={item.categoria.categoria}
                urlFoto={item.urlFoto}
                item={item}
                navigation={() => handleNavigation(item)}
                handleEditar={handleEditar}
                handleDelete={handleDelete}
              />
            )}
            keyExtractor={(item) => String(item.idProduto)}
            ListFooterComponent={<FooterList load={loading} />}
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};
