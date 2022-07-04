import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import AppStyles from "../../../../themes/AppStyles";
import { styles } from "./styles";

const CardIntegrante = ({ nome, urlFoto }) => {
  return (
    <View style={[{ padding: 20, width: 150 }]}>
      <Image source={{ uri: urlFoto }} style={styles.foto} />
      <Text style={[AppStyles.text, { textAlign: "center", color: "white" }]}>
        {nome}
      </Text>
      <View style={styles.redesSociais}>
        <Pressable style={styles.button}>
          <Text style={AppStyles.subTitle}>Linkedin</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={AppStyles.subTitle}>Github</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardIntegrante;
