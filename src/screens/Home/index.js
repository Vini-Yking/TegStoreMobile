import { View, Text, FlatList, ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { BotaoLogout } from "../../components/BotaoLogout";
import CardCategoria from "./components/CardCategoria";
import Sobre from "./components/Sobre";
import { styles } from "./styles";
import { MyCarousel } from "./components/carousel";

export const Home = () => {
  return (
    <ScrollView>
      <BotaoLogout />
       <ScrollView style={[styles.categoriasContainer, {flexDirection: 'row'}]}>
        <CardCategoria nomeCategoria="Nome da Categoria" />
      </ScrollView> 
      <View style={styles.sobreContainer}>
        <Sobre />
      </View>
      <MyCarousel/>
    </ScrollView>

  );
};
