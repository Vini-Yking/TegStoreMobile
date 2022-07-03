import { View, Text, Button, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Logout } from "../../util/Logout";
import { styles } from "../Produtos/styles";
import { getAllClientes } from "../../services/axiosclient";

export const Clientes = () => {

    const [clientes, setClientes] = useState([])
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
                                CPF: {item.cpf}
                            </Text>
                            <Text>{item.nome} </Text>
                            <Text>{item.email} </Text>
                            <Text>{item.cep} </Text>
                            <Text>Foto aqui</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
};
