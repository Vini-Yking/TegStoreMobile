import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export const BotaoRemover = ({ onPress, idProduto }) => {
  return (
    <>
      <View style={{}}>
        <Pressable style={styles.button} title="editar" onPress={onPress}>
          <Text style={styles.buttonText}>Remover</Text>
        </Pressable>
      </View>
    </>
  );
};
