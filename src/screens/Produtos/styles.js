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
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "indigo",
  },
  input: {
    padding: 3,
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
  subTitle: {
    color: "indigo",
    textAlign: "center",
  },
  pesquisaContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  produtosContainer: {
    flex: 6,
    width: "100%",
    alignItems: "center",
  },
  produtosTitle: {
    borderColor: "indigo",
    borderBottomWidth: 2,
  },
  cardProduto: {
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
