import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "indigo",
    padding: 10,
    height: "100%"
  },
  inputs: {
    justifyContent: "center",
  },
  input: {
    borderColor: "indigo",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
    height: 35
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginTop: StatusBar.currentHeight + 10 || 10
  },
  button: {
    alignSelf: "center",
    backgroundColor: "indigo",
    paddingVertical: 10,
    marginBottom: 2,
    marginHorizontal: 3,
    paddingHorizontal: 20,
    borderRadius: 8,
  }, dropdownButonstyle: {
    borderWidth: 2,
    borderColor: "indigo",
    borderRadius: 8,
    width: 200,
    height: 35,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
});
