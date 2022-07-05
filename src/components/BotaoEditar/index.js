import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { styles } from "./styles";
import { putProduto } from "../../services/axiosclient";
import { Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";

export const BotaoEditar = ({ onPress }) => {
  return (
    <View style={{}}>
      <Pressable style={styles.button} title="editar" onPress={onPress}>
        <FontAwesomeIcon icon={faPencil} size={20} color="white" />
      </Pressable>
    </View>
  );
};
