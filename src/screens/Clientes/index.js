import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Logout } from "../../util/Logout";
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
        <Logout />
        <FlatList
          style={{ width: "100%" }}
          data={clientes.data}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.cardProduto}>
              <Text
                style={[
                  { borderBottomWidth: 2, borderBottomColor: "indigo" },
                  AppStyles.title,
                ]}
              >
                CPF: {item.cpf}
              </Text>
              <Text style={AppStyles.title}>{item.nome} </Text>
              <Text style={AppStyles.title}>{item.email} </Text>
              <Text style={AppStyles.title}>{item.cep} </Text>
              <Text style={AppStyles.title}>Foto aqui</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};
