import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Cadastro } from "../screens/Cadastro";
import { DetalhesProduto } from "../screens/DetalhesProduto";

import Tab from "./Tab";

const Stack = createNativeStackNavigator();

export const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={Tab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalhesProduto"
        component={DetalhesProduto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
