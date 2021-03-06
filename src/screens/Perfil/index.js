import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useContext, useEffect } from "react";
import { BotaoLogout } from "../../components/BotaoLogout";
import appStyles from "../../themes/AppStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { AuthContext } from "../../context/AuthContext";

export const Perfil = () => {
  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "indigo" }}>
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
          color="white"
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
          <Text style={[appStyles.title, { color: "white" }]}>{user.nome}</Text>
          <Text style={[appStyles.title, { color: "white" }]}>
            {user.email}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
