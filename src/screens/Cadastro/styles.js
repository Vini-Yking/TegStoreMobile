import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "indigo",
    justifyContent: "center",
    padding: 10,
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderColor: "indigo",
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: '90%',
    borderRadius: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "indigo",
    paddingVertical: 10,
    marginBottom: 2,
    marginHorizontal: 3,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
