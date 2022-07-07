import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Pressable, Text, View, StatusBar } from "react-native";
import { styles } from "./styles";

export const BotaoPesquisa = ({ onPress }) => {
  return (
        <Pressable
          style={[
            styles.button,
            { paddingHorizontal: 6, paddingVertical: 7, marginLeft: 3 },
          ]}
          title="pesquisar"
          onPress={onPress}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="white" />
        </Pressable>
  );
};
