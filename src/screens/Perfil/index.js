import { View, Text, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import { BotaoLogout } from "../../components/BotaoLogout";
import appStyles from "../../themes/AppStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";

export const Perfil = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <BotaoLogout />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FontAwesomeIcon
          icon={faUserTie}
          size={200}
          color="indigo"
          mask={faCircle}
          transform="shrink-6"
        />
        <View
          style={{
            flex: 0.3,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text style={appStyles.title}> Admin</Text>
          <Text style={appStyles.title}> admin@mail.com</Text>
        </View>
      </View>
    </View>
  );
};
