import { View, Text, FlatList, ScrollView } from "react-native";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";
import { styles } from "./styles";
import MyCarousel from "./components/Carousel";

export const Home = () => {
  return (
    <ScrollView>
      <BotaoLogout />
      <MyCarousel />
       {/* <ScrollView style={[styles.categoriasContainer, {flexDirection: 'row'}]}> */}
        <CardCategoria nomeCategoria="Nome da Categoria" />
      {/* </ScrollView>  */}
      <View style={styles.sobreContainer}>
        <Sobre />
      </View>
    </ScrollView>

  );
};
