import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    padding: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#8b0000",
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
