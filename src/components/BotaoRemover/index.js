import { Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";
import { styles } from "./styles";

export const BotaoRemover = ({ onPress, idProduto }) => {
  return (
    <>
      <View style={{}}>
        <Pressable style={styles.button} title="editar" onPress={onPress}>
          <Text style={[AppStyles.text, { color: "white" }]}>Remover</Text>
        </Pressable>
      </View>
    </>
  );
};
