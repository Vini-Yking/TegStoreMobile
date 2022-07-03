import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Roboto_400Regular",
  },
});
