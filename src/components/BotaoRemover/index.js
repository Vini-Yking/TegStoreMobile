
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";
import { styles } from "./styles";

export const BotaoRemover = ({ onPress, idProduto }) => {
  return (
    <>
      <View style={{}}>
        <Pressable style={styles.button} title="editar" onPress={onPress}>
          <FontAwesomeIcon icon={faTrashCan} size={20} color="white" />
        </Pressable>
      </View>
    </>
  );
};
