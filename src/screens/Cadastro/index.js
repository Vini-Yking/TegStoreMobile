import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import AppStyles from "../../themes/AppStyles";

export const Cadastro = ({ navigation, route }) => {
  const { produto } = route.params;
  const [nomeProduto, setNomeProduto] = useState(produto.nomeProduto);
  const [idCategoria, setIdCategoria] = useState(produto.categoria.id);
  const [valorUnitario, setValorUnitario] = useState(produto.valorUnitario);
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(
    produto.quantidadeEstoque
  );

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          Nome do produto:{" "}
        </Text>
        <TextInput
          value={nomeProduto}
          onChangeText={setNomeProduto}
          placeholder="nome do produto"
          style={[styles.input, AppStyles.text]}
        />
        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          Categoria: - aqui é pra ter um dropdown
        </Text>
        <TextInput
          value={idCategoria}
          onChangeText={setIdCategoria}
          placeholder="categoria"
          style={[styles.input, AppStyles.text]}
        />
        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          valor unitário - ajeitar para numero xxx,xx
        </Text>
        <TextInput
          value={valorUnitario}
          onChangeText={setValorUnitario}
          placeholder="valor unitário"
          style={[styles.input, AppStyles.text]}
        />
        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          quantidade estoque - ajeitar pra numero inteiro
        </Text>
        <TextInput
          value={quantidadeEstoque}
          onChangeText={setQuantidadeEstoque}
          placeholder="quantidade em estoque"
          style={[styles.input, AppStyles.text]}
        />
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={AppStyles.text}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={AppStyles.text}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};
