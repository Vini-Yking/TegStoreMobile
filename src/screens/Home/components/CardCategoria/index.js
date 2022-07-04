import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../../../context/AuthContext";
import AppStyles from "../../../../themes/AppStyles";

const CardCategoria = ({ nomeCategoria, icone }) => {
  const { categorias } = useContext(AuthContext);
  return (
    <View style={AppStyles.card}>
      <TouchableOpacity>
        <Text style={AppStyles.text}>{nomeCategoria}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardCategoria;
