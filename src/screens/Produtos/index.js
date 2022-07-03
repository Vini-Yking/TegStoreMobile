import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Logout } from "../../util/Logout";

export const Produtos = () => {
  return (
    <><Logout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Produtos</Text>
      </View>
    </>
  );
};
