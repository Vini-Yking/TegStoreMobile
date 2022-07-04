import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "indigo",
    fontFamily: "Roboto_400Regular",
  },
  subTitle: {
    color: "indigo",
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  text: {
    fontSize: 14,
    color: "black",
    fontFamily: "Roboto_400Regular",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Roboto_400Regular",
  },
  card: {
    minHeight: 100,
    justifyContent: "center",
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "indigo",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
