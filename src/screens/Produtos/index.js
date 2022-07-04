import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import { getAllProdutos } from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";

export const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const { categorias } = useContext(AuthContext);

  useEffect(() => {
    const GetProducts = async () => {
      const produtos = await getAllProdutos();
      setListaProdutos(produtos);
    };
    GetProducts();
  }, []);

  const onPress = (item) => {
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
            ></TextInput>
          </View>
        </View>
        <SafeAreaView style={styles.produtosContainer}>
          <FlatList
            style={{ width: "100%" }}
            data={listaProdutos.data}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => (
              <View style={AppStyles.card}>
                <Text style={[AppStyles.subTitle]}>{item.nomeProduto}</Text>
                <Text style={AppStyles.text}>
                  R$ {item.valorUnitario.toFixed(2)}
                </Text>
                <Text style={AppStyles.text}>{item.categoria.categoria} </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onPress(item)}
                >
                  <Image
                    source={{ uri: item.urlFoto }}
                    style={{ width: 200, height: 200 }}
                  />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.idProduto}
          />
        </SafeAreaView>
      </View>
    </>
  );
};
