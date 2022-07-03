import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "indigo",
    borderBottomWidth: 2,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "indigo",
  },
  input: {
    flex: 2,
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
    flex: 1,
    color: "indigo",
    textAlign: "center",
  },
  pesquisaContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  produtosContainer: {
    flex: 6,
  },
  cardProduto: {
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 3,
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
