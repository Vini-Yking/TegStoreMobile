import { useContext, useState } from "react";
import { Pressable, Text, View, StatusBar } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import ModalConfirmacao from "../ModalConfirmacao";

export const BotaoLogout = () => {
  const { sair } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <ModalConfirmacao
          modalVisible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onConfirm={sair}
          setModalVisible={setModalVisible}
          pergunta="Tem certeza que deseja sair?"
        />
      </View>
      <View
        style={{
          marginTop: StatusBar.currentHeight || 0,
          alignSelf: "flex-end",
          zIndex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            position: "absolute",
            top: 0,
            zIndex: 1,
          }}
        >
          <Pressable
            style={styles.button}
            title="sair"
            onPress={() => setModalVisible(true)}
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size={20}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </>
  );
};
