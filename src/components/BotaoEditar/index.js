import { styles } from "./styles";
import { putProduto } from "../../services/axiosclient";
import { Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";

export const BotaoEditar = ({ onPress, idProduto }) => {
  return (
    <View style={{}}>
      <Pressable style={styles.button} title="editar" onPress={onPress}>
        <Text style={[AppStyles.text, { color: "white" }]}>Editar</Text>
      </Pressable>
    </View>
  );
};
