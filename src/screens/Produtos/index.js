import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Logout } from "../../util/Logout";
import { styles } from "./styles";
import { getAllProdutos } from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";

export const Produtos = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const { categorias } = useContext(AuthContext);

  useEffect(() => {
    const GetProducts = async () => {
      const produtos = await getAllProdutos();
      setListaProdutos(produtos);
    };
    GetProducts();
  }, []);

  return (
    <>
      <View style={styles.containter}>
        <View style={styles.headerContainer}>
          <Logout />
          <Text style={styles.title}>Produtos</Text>
          <Text style={styles.subTitle}>Categoria: x</Text>
          <View style={styles.pesquisaContainer}>
            <TextInput placeholder="Buscar" style={styles.input}></TextInput>
          </View>
        </View>
        <SafeAreaView style={styles.produtosContainer}>
          <FlatList
            style={{ width: "100%" }}
            data={listaProdutos.data}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => (
              <View style={styles.cardProduto}>
                <Text
                  style={{ borderBottomWidth: 2, borderBottomColor: "indigo" }}
                >
                  {item.nomeProduto}
                </Text>
                <Text>R$ {item.valorUnitario} </Text>
                <Text>{item.categoria.categoria} </Text>
                <Image
                  source={{ uri: item.urlFoto }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            )}
            keyExtractor={(item) => item.idProduto}
          />
        </SafeAreaView>
      </View>
    </>
  );
};
