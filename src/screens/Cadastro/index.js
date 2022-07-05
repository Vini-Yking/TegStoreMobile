import { useContext, useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import { styles } from "./styles";
import AppStyles from "../../themes/AppStyles";
import { AuthContext } from "../../context/AuthContext";
// import DropdownMenu from 'react-native-dropdown-menu';
import { deleteProduto, putProduto } from "../../services/axiosclient";

export const Cadastro = ({ navigation, route }) => {
  const { produto } = route.params;
  const [nomeProduto, setNomeProduto] = useState(produto.nomeProduto);
  const [produtoFoto, setProdutoFoto] = useState(produto.urlFoto);
  const [idCategoria, setIdCategoria] = useState(produto.categoria.id);
  const [categoria, setCategoria] = useState(produto.categoria.categoria);
  const [valorUnitario, setValorUnitario] = useState(produto.valorUnitario);
  const { categorias } = useContext(AuthContext);
  const [categs, setCategs] = useState([])
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(produto.quantidadeEstoque);


  useEffect(() => {
    const get = async () => {
      const cats = await categorias
      console.log(cats);
      setCategs(cats.map((item) => (item.categoria))) //cria o array de categorias para usar no dropDown não ainda não implementado
      console.log(produto.idProduto)
    };
    get();
  }, [])

  const handleInput = () => {
    if (idCategoria.length === 0 && nomeProduto.length === 0 && quantidadeEstoque <= 0 && valorUnitario < 0.01 && produtoFoto.length === 0) {
      Alert.alert("campos estão em branco por favor preencha");//não sta funcionando
      return
    } else {
      Alert.alert("Produto editado com sucesso!");//não sta funcionando
      handlerEdit()
    }
  }

  const handlerEdit = async () => {
    const response = await putProduto(produto.idProduto, idCategoria, nomeProduto, quantidadeEstoque, valorUnitario, produtoFoto);
    navigation.navigate("Produtos")
  }

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
        <TextInput
          value={produtoFoto}
          onChangeText={setProdutoFoto}
          placeholder="Foto do produto"
          style={[styles.input, AppStyles.text]}
        />
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={AppStyles.text}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleInput}>
          <Text style={AppStyles.text}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};
