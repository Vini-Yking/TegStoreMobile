import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "indigo",
    alignItems: "center",
    borderWidth: 1,
    padding: 20,
  },
  backButton: {
    backgroundColor: "indigo",
    padding: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop:1
  },
  box: {
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    minWidth:'80%'
  },
});
