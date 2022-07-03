import { View, Text, Button, FlatList } from "react-native";
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
      <Logout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={clientes.data}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.cardProduto}>
              <Text
                style={
                  (AppStyles.text,
                  { borderBottomWidth: 2, borderBottomColor: "indigo" })
                }
              >
                CPF: {item.cpf}
              </Text>
              <Text style={AppStyles.text}>{item.nome} </Text>
              <Text style={AppStyles.text}>{item.email} </Text>
              <Text style={AppStyles.text}>{item.cep} </Text>
              <Text>Foto aqui</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};
