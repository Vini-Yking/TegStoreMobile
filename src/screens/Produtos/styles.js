import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    paddingBottom: 10,
    zIndex: 1,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    padding: 6,
    borderColor: "indigo",
    borderWidth: 2,
    width: 200,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  pesquisaContainer: {
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // alignContent:"center"
  },
  produtosContainer: {
    backgroundColor: "indigo",
    flex: 6,
    width: "100%",
    alignItems: "center",
  },
  produtosTitle: {
    borderColor: "indigo",
    borderBottomWidth: 2,
  },
});
