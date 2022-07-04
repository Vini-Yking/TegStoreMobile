import { useContext } from "react";
import { Pressable, Text, View, StatusBar } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./styles";

export const BotaoLogout = () => {
  const { sair } = useContext(AuthContext);
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight || 0,
        alignSelf: "flex-end",
        zIndex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignSelf: "flex-end",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      >
        <Pressable style={styles.button} title="sair" onPress={sair}>
          <Text style={styles.buttonText}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
};
