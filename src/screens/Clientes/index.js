import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout";
import { getAllClientes } from "../../services/axiosclient";
import AppStyles from "../../themes/AppStyles";

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await getAllClientes();
      // console.log(clients);
      setClientes(clients);
    };
    getClients();
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "indigo",
        }}
      >
        <BotaoLogout />
        <FlatList
          style={{ width: "100%" }}
          data={clientes.data}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={AppStyles.card}>
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

        />
      </SafeAreaView>
    </>
  );
};
