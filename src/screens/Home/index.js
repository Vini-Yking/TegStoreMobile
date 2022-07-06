import { View, Text, FlatList, ScrollView, SafeAreaView } from "react-native";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";
import { styles } from "./styles";
import ListaHorizontal from "./components/Carousel";

export const Home = ({ navigation }) => {

  const handleCategoria = (categoria) => {
    navigation.navigate("Produtos"
    ,{ categoria });
  }

  return (
  <SafeAreaView>
    <ScrollView>
      <BotaoLogout />
      <ScrollView style={{ backgroundColor: "indigo" }}>
        <View style={styles.categoriasContainer}>
          <ListaHorizontal handleCategoria={handleCategoria} />
        </View>
        <View style={styles.sobreContainer}>
          <Sobre />
        </View>
      </ScrollView>
    </ScrollView>
  </SafeAreaView>
  );
};
