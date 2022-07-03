import { View, Text, Button, FlatList, Image, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Logout } from "../../util/Logout";
import { styles } from "./styles";
import { getAllProdutos } from "../../services/axiosclient";

export const Produtos = () => {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    const GetProducts = async () => {
      //como contornar um async dentro de um useEffect
      const produtos = await getAllProdutos();
      console.log(produtos);
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
          <View style={styles.pesquisaContainer}>
            <TextInput placeholder="Buscar" style={styles.input}></TextInput>
            <Text style={styles.subTitle}>Categoria: x</Text>
          </View>
        </View>
        <View style={styles.produtosContainer}>
          <FlatList
            data={listaProdutos.data}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => (
              <View style={styles.cardProduto}>
                <Text
                  style={{ borderBottomWidth: 2, borderBottomColor: "indigo" }}
                >
                  {item.nomeProduto}{" "}
                </Text>
                <Text>R$ {item.valorUnitario} </Text>
                <Text>{item.categoria.categoria} </Text>
                <Image
                  source={item.urlFoto}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            )}
            keyExtractor={(item) => item.idProduto}
          />
        </View>
      </View>
    </>
  );
};
