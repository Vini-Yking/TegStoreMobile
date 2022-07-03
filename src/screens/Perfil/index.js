import { View, Text, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import { Logout } from "../../util/Logout";
import { styles } from "../Produtos/styles";

export const Perfil = () => {

  const [clientes, setClientes] = useEffect([])
  useEffect(() => {
    const getClients = async () => {
      const clients = await getAllClientes();
      console.log(clients)
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
                style={{ borderBottomWidth: 2, borderBottomColor: "indigo" }}>
                {item.nomeProduto}
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
    </>
  );
};
