import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { BotaoLogout } from "../../components/BotaoLogout";
import AppStyles from "../../themes/AppStyles";

export const Sobre = () => {
  return (
    <>
      <BotaoLogout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AppStyles.title}>Sobre</Text>
      </View>
    </>
  );
};
