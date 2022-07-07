import { Modal, Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";
import { styles } from "./styles";

const ModalConfirmacao = ({
  modalVisible,
  setModalVisible,
  pergunta,
  onConfirm,
  onCancel,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[AppStyles.text, styles.title]}>Tem certeza?</Text>
            <Text style={AppStyles.text}>{pergunta}</Text>
            <View style={styles.inputContainer}>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={onConfirm}
              >
                <Text style={styles.textStyle}>Sim</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancel}
              >
                <Text style={styles.textStyle}>Não</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalConfirmacao;
