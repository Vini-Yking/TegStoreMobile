import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Logout } from "../../util/Logout";
import AppStyles from "../../themes/AppStyles";

export const Sobre = () => {
  return (
    <>
      <Logout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AppStyles.title}>Sobre</Text>
      </View>
    </>
  );
};
