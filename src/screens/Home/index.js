import { View, Text, FlatList, ScrollView, SafeAreaView } from "react-native";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";
import { styles } from "./styles";
import ListaHorizontal from "./components/Carousel";

export const Home = () => {
  return (
    <View>
      <BotaoLogout />
      <ScrollView style={{ backgroundColor: "indigo" }}>
        <View style={styles.categoriasContainer}>
          <ListaHorizontal />
        </View>
        <View style={styles.sobreContainer}>
          <Sobre />
        </View>
      </ScrollView>
    </View>
  );
};
