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
import { getAllProdutos } from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { CardProduto } from "./components/CardProduto";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categorias } = useContext(AuthContext);

  useEffect(() => {
    const GetProducts = async () => {
      setLoading(true);
      const produtos = await getAllProdutos();
      // como fazer pra ir pegando aos poucos
      setListaProdutos(produtos);
      setLoading(false);
    };
    GetProducts();
  }, []);

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
            ></TextInput>
          </View>
        </View>
        <SafeAreaView style={styles.produtosContainer}>
          {loading ? (
            <ActivityIndicator style={{ alignSelf: "center", marginTop: 20 }} />
          ) : (
            <FlatList
              style={{ width: "100%" }}
              data={listaProdutos.data}
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
              keyExtractor={(item) => item.idProduto}
            />
          )}
        </SafeAreaView>
      </View>
    </>
  );
};
