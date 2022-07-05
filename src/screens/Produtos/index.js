import {
  View,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import {
  getAllProdutos,
  getProdutoByName,
  getAllProdutosPaginados,
} from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { CardProduto } from "./components/CardProduto";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import { BotaoAdicionar } from "../../components/BotaoAdicionar/index.js";
import { BotaoPesquisa } from "../../components/BotaoPesquisa/index.js";

export const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const { categorias } = useContext(AuthContext);
  const [page, setPage] = useState(0);

  // AJEITAR PAGEABLE DA API
  const handlePesquisa = async () => {
    const pageSize = 10;
    setListaProdutos([]);
    if (pesquisa.length === 0) {
      // Pega todos
      const produtos = await getAllProdutosPaginados(page, pageSize);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
      console.log(produtos);
      console.log(page);
      setPage((page) => page + 1);
      return;
    }
    // Filtra pelo nome
    const produtosByName = await getProdutoByName(pesquisa, page, pageSize);
    setListaProdutos([...listaProdutos, ...produtosByName.data.content]);
    console.log(listaProdutos);
    setPage((page) => page + 1);
  };

  // Pesquisa novo produto
  useEffect(() => {
    setLoading(true);
    setPage(0);
    handlePesquisa();
    setLoading(false);
  }, [pesquisa]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     if (pesquisa.length === 0) {
  //       // Pega todos
  //       const produtos = await getAllProdutos();
  //       setListaProdutos(produtos.data);
  //       setLoading(false);
  //       return;
  //     }
  //     // Filtra pelo nome
  //     const produtosByName = await getProdutoByName(pesquisa, 0, 4);
  //     setListaProdutos(produtosByName.data.content);
  //     setLoading(false);
  //   };
  //   getProducts();
  // }, [pesquisa]);

  const handleNavigation = (item) => {
    navigation.navigate("DetalhesProduto", {
      produto: { item },
    });
  };

  const handleEditar = (item) => {
    navigation.navigate("Cadastro", {
      produto: item,
    });
  };

  const handleDelete = async (item) => {
    const response = await deleteProduto(item.idProduto);
    Alert.alert("Produto excluir com sucesso!");
    navigation.navigate("Produtos");
  };

  return (
    <>
      <View style={styles.containter}>
        <View style={styles.headerContainer}>
          <BotaoLogout />
          <Text style={AppStyles.title}>Categoria: x</Text>
          <View style={styles.pesquisaContainer}>
            <TextInput
              placeholder="Buscar"
              style={[styles.input, AppStyles.text]}
              value={pesquisa}
              onChangeText={setPesquisa}
            ></TextInput><BotaoPesquisa />
          </View>
          <BotaoAdicionar />
        </View>
        
        <SafeAreaView style={styles.produtosContainer}>
          {loading ? (
            <ActivityIndicator style={{ alignSelf: "center", marginTop: 20 }} />
          ) : (
            <FlatList
              style={{ width: "100%" }}
              data={listaProdutos}
              showsVerticalScrollIndicator={true}
              onEndReached={handlePesquisa}
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
            />
          )}
        </SafeAreaView>
      </View>
    </>
  );
};
