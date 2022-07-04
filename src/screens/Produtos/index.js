import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import { getAllProdutos } from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";

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
          <BotaoLogout />
          <Text style={AppStyles.title}>Categoria: x</Text>
          <View style={styles.pesquisaContainer}>
            <TextInput
              placeholder="Buscar"
              style={[styles.input, AppStyles.text]}
            ></TextInput>
          </View>
        </View>
        <SafeAreaView style={styles.produtosContainer}>
          <FlatList
            style={{ width: "100%" }}
            data={listaProdutos.data}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => (
              <View style={styles.cardProduto}>
                <Text style={[AppStyles.subTitle]}>{item.nomeProduto}</Text>
                <Text style={AppStyles.text}>
                  R$ {item.valorUnitario.toFixed(2)}
                </Text>
                <Text style={AppStyles.text}>{item.categoria.categoria} </Text>
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
