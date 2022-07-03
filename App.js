import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/context/AuthContext";
import { Routes } from "./src/routes";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { View } from "react-native";

export default function App() {
  //Using the useFont Hook
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar />
      <Routes />
    </AuthProvider>
  );
}
