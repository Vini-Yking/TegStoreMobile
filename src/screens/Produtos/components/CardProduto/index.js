import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import AppStyles from "../../../../themes/AppStyles";
import { BotaoEditar } from "../../../../components/BotaoEditar";
import { BotaoRemover } from "../../../../components/BotaoRemover";

export const CardProduto = ({
  item,
  nomeProduto,
  valorUnitario,
  categoria,
  urlFoto,
  navigation,
  handleEditar,
  handleDelete
}) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <View style={AppStyles.card}>
      <Text style={[AppStyles.subTitle]}>{nomeProduto}</Text>
      <Text style={AppStyles.text}>R$ {valorUnitario.toFixed(2)}</Text>
      <Text style={AppStyles.text}>{categoria} </Text>
      <TouchableOpacity onPress={navigation}>
        <Image
          source={{ uri: urlFoto }}
          style={{ width: 200, height: 200 }}
          onLoad={() => setLoadingImage(false)}
        />
        {loadingImage && <ActivityIndicator size={25} color="indigo" />}
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          marginTop: 4
        }}
      >
        <BotaoEditar onPress={() => handleEditar(item)} />
        <BotaoRemover onPress={() => handleDelete(item)} />
      </View>
    </View>
  );
};
