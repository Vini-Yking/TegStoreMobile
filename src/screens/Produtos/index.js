import { View, Text, FlatList, TextInput, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import {
  getProdutoByName,
  getAllProdutosPaginados,
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
  const [pesquisa, setPesquisa] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const { categorias } = useContext(AuthContext);
  const [page, setPage] = useState(0);

  const handleBuscaPaginada = async () => {
    if (loading) return;
    setLoading(true);
    const pageSize = 15; // número de itens por page
    if (nomeProduto.length === 0) {
      // pega todos
      const produtos = await getAllProdutosPaginados(page, pageSize);
      console.log(page);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
      setPage((page) => page + 1);
      setLoading(false);
      return;
    }
    // pesquisa pelo nome
    setListaProdutos([]);
    const produtosByName = await getProdutoByName(nomeProduto, page, pageSize);
    setListaProdutos([...listaProdutos, ...produtosByName.data.content]);
    setPage((page) => page + 1);
    setLoading(false);
  };

  const handlePesquisa = () => {
    setNomeProduto(pesquisa);
    setPage(0);
    handleBuscaPaginada();
  };

  useEffect(() => {
    handleBuscaPaginada();
  }, []);

  const handleNavigation = (item) => {
    navigation.navigate("DetalhesProduto", {
      produto: { item },
    });
  };

  const handleEditar = (item) => {
    navigation.navigate("Cadastro", {
      produto: {item},
    });
  };

  const handleCriar = () => {
    navigation.navigate("Cadastro", {
      produto: "",
    });

  };

  const handleDelete = async (item) => {
    const response = await deleteProduto(item.idProduto);
    Alert.alert("Produto excluido com sucesso!");
    navigation.navigate("Produtos");
  };

  return (
    <>
      <SafeAreaView style={styles.containter}>
        <View style={styles.headerContainer}>
          <BotaoLogout />
          <Text style={[AppStyles.title,{marginTop:3}]}>Categoria: x</Text>
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
                handleRemover={handleDelete}
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
