import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons/faBan";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useContext, useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, Alert, Image } from "react-native";
import { styles } from "./styles";
import AppStyles from "../../themes/AppStyles";
import { AuthContext } from "../../context/AuthContext";
import { deleteProduto, putProduto } from "../../services/axiosclient";

export const Cadastro = ({ navigation, route }) => {
  const { produto } = route.params;
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtoFoto, setProdutoFoto] = useState();
  const [idCategoria, setIdCategoria] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const { categorias } = useContext(AuthContext);
  const [loadingImage, setLoadingImage] = useState(true);
  const [categs, setCategs] = useState([])

  useEffect(() => {

    if (produto === "") {
      setNomeProduto("");
      setProdutoFoto("")
      setValorUnitario("")
      setQuantidadeEstoque("")
      setIdCategoria("")
    } else {
      setNomeProduto(produto.nomeProduto);
      setProdutoFoto(produto.urlFoto)
      setValorUnitario(produto.valorUnitario)
      setQuantidadeEstoque(produto.quantidadeEstoque)
      setIdCategoria(produto.categoria.id)
    }
    console.log(idCategoria)
    const get = async () => {
      const cats = await categorias
      // console.log(cats);
      setCategs(cats.map((item) => (item.categoria))) //cria o array de categorias para usar no dropDown não ainda não implementado
    };
    get();
  }, [])

  const handleInput = () => {
    if (idCategoria === 'undefined' && nomeProduto === 'undefined' && quantidadeEstoque <= 0 && valorUnitario < 0.01 && produtoFoto === 'undefined') {
      Alert.alert("campos estão em branco por favor preencha");//não sta funcionando
      return
    } else {
      Alert.alert("Produto editado com sucesso!");//não sta funcionando
      // handlerEdit()
      if (produto === "") {
        console.log(produto)
      } else {
        console.log("produto nulo")
      }
    }
  }

  const handlerEdit = async () => {
    const response = await putProduto(produto.idProduto, idCategoria, nomeProduto, quantidadeEstoque, valorUnitario, produtoFoto);
    navigation.navigate("Produtos")
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: produtoFoto }}
          style={{ width: 200, height: 200, alignSelf: "center" }}
          onLoad={() => setLoadingImage(false)}
        />
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
        <View style={{ width: 20, alignSelf: "center", flexDirection: "row", justifyContent: "center" }}>
          <Pressable style={styles.button} onPress={handleInput}>
            <FontAwesomeIcon icon={faCheck} size={30} color="white" />
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faBan} size={30} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
