import { Image, Text, TouchableOpacity, View } from "react-native";
import AppStyles from "../../../../themes/AppStyles";
import { styles } from "./styles";

const CardIntegrante = ({ nome, urlFoto }) => {
  return (
    <View style={[AppStyles.card, { width: 150, borderWidth: 0 }]}>
      <TouchableOpacity>
        <Image source={{ uri: urlFoto }} style={styles.foto} />
        <Text style={[AppStyles.subTitle, { textAlign: "center" }]}>
          {nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardIntegrante;
