import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: "indigo",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonConfirm: {
    backgroundColor: "#006400",
  },
  buttonCancel: {
    backgroundColor: "#8b0000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
