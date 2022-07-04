import { styles } from "./styles";
import { putProduto } from "../../services/axiosclient";
import { Pressable, Text, View } from "react-native";

export const BotaoEditar = ({ onPress, idProduto }) => {
  return (
    <View style={{}}>
      <Pressable style={styles.button} title="editar" onPress={onPress}>
        <Text style={styles.buttonText}>Editar</Text>
      </Pressable>
    </View>
  );
};
