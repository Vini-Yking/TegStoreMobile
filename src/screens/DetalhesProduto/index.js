import { useEffect } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";
import { styles } from "./styles";
import { BotaoEditar } from "../../components/BotaoEditar";
import { BotaoRemover } from "../../components/BotaoRemover";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowTurnRight } from "@fortawesome/free-solid-svg-icons/faArrowTurnRight";
import { deleteProduto } from "../../services/axiosclient";

export const DetalhesProduto = ({ navigation, route }) => {
  const { produto } = route.params;

  const handleEditar = () => {
    navigation.navigate("Cadastro", {
      produto: produto.item,
    });
  };

  const handleDelete = async () => {
    const response = await deleteProduto(produto.item.idProduto);
    Alert.alert("Produto excluir com sucesso!");
    navigation.navigate("Produtos");
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ alignSelf: "start", right: "1%", borderRadius: 4 }}>
          <Pressable styles={[styles.backButton]} onPress={navigation.goBack}>
            <FontAwesomeIcon
              icon={faArrowTurnRight}
              size={25}
              color="indigo"
              style={{
                borderWidth: 2,
                backgroundColor: "white",
                borderRadius: 5,
                padding: 3,
                transform: [{ rotate: "180deg" }],
              }}
            />
          </Pressable>
        </View>
        <Image
          source={{ uri: produto.item.urlFoto }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={AppStyles.title}>{produto.item.nomeProduto}</Text>
        <Text style={AppStyles.text}>id: {produto.item.idProduto}</Text>
        <Text style={AppStyles.text}>valor: {produto.item.valorUnitario}</Text>
        <Text style={AppStyles.text}>
          categoria: {produto.item.categoria.categoria}
        </Text>
        <Text style={AppStyles.text}>
          data de alteração: {produto.item.dataAlteracao}
        </Text>
        <Text style={AppStyles.text}>
          quantidade em estoque: {produto.item.quantidadeEstoque}
        </Text>
        <View style={styles.buttons}>
          <BotaoEditar onPress={handleEditar} />
          <BotaoRemover onPress={handleDelete} />
        </View>
      </View>
    </View>
  );
};
