import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 3,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "indigo",
    marginBottom: 30,
  },
  input: {
    borderColor: "indigo",
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    width: 200,
    alignSelf: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  button: {
    marginTop: 30,
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
  },
});
