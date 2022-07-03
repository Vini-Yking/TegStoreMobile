import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Logout } from "../../util/Logout";
import { styles } from "./styles";

export const Produtos = () => {
  return (
    <>
      <Logout />
      <View style={styles.containter}>
        <Text>Produtos</Text>
      </View>
    </>
  );
};
