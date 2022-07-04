import { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import AppStyles from "../../themes/AppStyles";
import { styles } from "./styles";
import { BotaoEditar } from "../../components/BotaoEditar";
import { BotaoRemover } from "../../components/BotaoRemover";

export const DetalhesProduto = ({ navigation, route }) => {
  const { produto } = route.params;

  useEffect(() => {
    console.log(produto);
  }, []);

  const handleEditar = () => {
    navigation.navigate("Cadastro", {
      produto: produto.item,
    });
  };

  const handleRemover = () => {
    navigation.navigate("Produtos");
  };

  return (
    <View style={styles.container}>
      <Pressable styles={styles.backButton} onPress={navigation.goBack}>
        <Text style={AppStyles.text}>Voltar</Text>
      </Pressable>
      <View style={styles.box}>
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
          <BotaoEditar onPress={() => handleEditar()} />
          <BotaoRemover onPress={() => handleRemover()} />
        </View>
      </View>
    </View>
  );
};
