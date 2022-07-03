import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
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
    width:"100%",
    alignItems:"center",
  },
  cardProduto: {
    width:300,
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
