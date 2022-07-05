import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import AppStyles from "../../../../themes/AppStyles";

export const CardProduto = ({
  item,
  nomeProduto,
  valorUnitario,
  categoria,
  urlFoto,
  navigation,
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
        {loadingImage && <ActivityIndicator />}
      </TouchableOpacity>
    </View>
  );
};
