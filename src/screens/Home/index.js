import { View, Text, FlatList, ScrollView } from "react-native";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";
import { styles } from "./styles";

export const Home = () => {
  return (
    <ScrollView>
      <BotaoLogout />
      <View style={styles.categoriasContainer}>
        <CardCategoria nomeCategoria="Nome da Categoria" />
      </View>
      <View style={styles.sobreContainer}>
        <Sobre />
      </View>
    </ScrollView>
  );
};
