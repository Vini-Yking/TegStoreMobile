import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { styles } from "./styles";
import { putProduto } from "../../services/axiosclient";
import { Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";

export const BotaoAdicionar = ({ onPress }) => {
  return (
    <View style={{}}>
      <Pressable style={styles.button} title="editar" onPress={onPress}>
        <FontAwesomeIcon icon={faPlus} size={20} color="white" />
      </Pressable>
    </View>
  );
};
