import { View, Text, FlatList } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";

export const Home = () => {
  return (
    <>
      <BotaoLogout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CardCategoria nomeCategoria="Nome" />
      </View>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <Sobre />
      </View>
    </>
  );
};
