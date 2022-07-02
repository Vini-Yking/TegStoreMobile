import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";

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
    </Stack.Navigator>
  );
};
