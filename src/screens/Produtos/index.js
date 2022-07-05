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
import { getAllProdutos, getProdutoByName } from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { CardProduto } from "./components/CardProduto";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const { categorias } = useContext(AuthContext);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (pesquisa.length === 0) {
        // Pega todos
        const produtos = await getAllProdutos();
        setListaProdutos(produtos.data);
        setLoading(false);
        return;
      }
      // Filtra pelo nome
      const produtosByName = await getProdutoByName(pesquisa);
      setListaProdutos(produtosByName.data.content);
      setLoading(false);
    };
    getProducts();
  }, [pesquisa]);

  const handleNavigation = (item) => {
    navigation.navigate("DetalhesProduto", {
      produto: { item },
    });
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
            ></TextInput>
          </View>
        </View>
        <SafeAreaView style={styles.produtosContainer}>
          {loading ? (
            <ActivityIndicator style={{ alignSelf: "center", marginTop: 20 }} />
          ) : (
            <FlatList
              style={{ width: "100%" }}
              data={listaProdutos}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <CardProduto
                  nomeProduto={item.nomeProduto}
                  valorUnitario={item.valorUnitario}
                  categoria={item.categoria.categoria}
                  urlFoto={item.urlFoto}
                  item={item}
                  navigation={() => handleNavigation(item)}
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
