import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { styles } from "./styles";
import { putProduto } from "../../services/axiosclient";
import { Pressable, Text, View } from "react-native";

export const BotaoAdicionar = ({ onPress }) => {
  return (
    <View style={{ alignSelf: "flex-end", right: '3%', top: '25%' }}>
      <Pressable style={styles.button} title="editar" onPress={onPress}>
        <FontAwesomeIcon icon={faPlus} size={30} color="white" />
      </Pressable>
    </View>
  );
};
