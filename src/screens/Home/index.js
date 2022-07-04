import { useContext, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { BotaoLogout } from "../../components/BotaoLogout";
import { styles } from "../Produtos/styles";

export const Home = () => {
  const { categorias } = useContext(AuthContext);
  return (
    <>
      <BotaoLogout />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
