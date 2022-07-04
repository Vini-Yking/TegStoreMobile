import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout";
import { styles } from "../Produtos/styles";
import { getAllClientes } from "../../services/axiosclient";
import AppStyles from "../../themes/AppStyles";

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await getAllClientes();
      console.log(clients);
      setClientes(clients);
    };
    getClients();
  }, []);
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <BotaoLogout />
        <FlatList
          style={{ width: "100%" }}
          data={clientes.data}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.cardProduto}>
              <Text
                style={{ borderBottomWidth: 2, borderBottomColor: "indigo" }}
              >
                CPF: {item.cpf}
              </Text>
              <Text style={AppStyles.text}>{item.nome} </Text>
              <Text style={AppStyles.text}>{item.email} </Text>
              <Text style={AppStyles.text}>{item.cep} </Text>
              <Text style={AppStyles.text}>Foto aqui</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};
