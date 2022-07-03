import { useContext, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { Logout } from "../../util/Logout";
import { styles } from "../Produtos/styles";

export const Home = () => {
  const { categorias } = useContext(AuthContext);
  return (
    <>
      <Logout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AppStyles.title}>Home</Text>
        <Text style={AppStyles.title}>Categorias</Text>
        <FlatList
          data={categorias.data}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Text
                  style={
                    (AppStyles.text,
                    { borderBottomWidth: 2, borderBottomColor: "indigo" })
                  }
                >
                  {item.categoria}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};
