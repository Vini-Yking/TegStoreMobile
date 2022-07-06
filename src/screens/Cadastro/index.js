import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons/faBan";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useContext, useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, Alert, Image } from "react-native";
import { styles } from "./styles";
import AppStyles from "../../themes/AppStyles";
import { AuthContext } from "../../context/AuthContext";
import {
  deleteProduto,
  postProduto,
  putProduto,
} from "../../services/axiosclient";

export const Cadastro = ({ navigation, route }) => {
  const { produto } = route.params;
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtoFoto, setProdutoFoto] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const { categorias } = useContext(AuthContext);
  const [loadingImage, setLoadingImage] = useState(true);
  const [categs, setCategs] = useState([]);

  useEffect(() => {
    if (produto) {
      setNomeProduto(produto.item.nomeProduto);
      setProdutoFoto(produto.item.urlFoto);
      setValorUnitario(String(produto.item.valorUnitario));
      setQuantidadeEstoque(String(produto.item.quantidadeEstoque));
      setIdCategoria(String(produto.item.categoria.id));
    }
    const get = async () => {
      const cats = await categorias;
      setCategs(cats.map((item) => item.categoria)); //cria o array de categorias para usar no dropDown não ainda não implementado
    };
    get();
  }, []);

  const handleInput = async () => {
    if (!produto) {
      const response = await handlerPost();
      if (response.status === 400) {
        Alert.alert(
          "Tem erros aqui",
          response.erros.reduce((a, b) => a + " \n" + b)
        );
      } else{
        Alert.alert("Sucesso",`O produto ${nomeProduto} foi cadastrado com sucesso`)
        navigation.goBack();
      }
    } else {
        const response = await handlerPut();
        if (response.status === 400) {
          Alert.alert(
            "Tem erros aqui",
            response.erros.reduce((a, b) => a + " \n" + b)
          );
        } else{
          Alert.alert("Sucesso",`O produto ${nomeProduto} foi alterado com sucesso`)
          navigation.goBack();
        }

  };
}

  const handlerPut = async () => {
    const response = await putProduto(
      produto.item.idProduto,
      idCategoria,
      nomeProduto,
      quantidadeEstoque,
      valorUnitario,
      produtoFoto
    );
    console.log(response)
    return response;
  };
  const handlerPost = async () => {
    const response = await postProduto(
      idCategoria,
      nomeProduto,
      quantidadeEstoque,
      valorUnitario,
      produtoFoto
    );
    return response;
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {produtoFoto && (
          <Image
            source={{ uri: produtoFoto }}
            style={{ width: 200, height: 200, alignSelf: "center" }}
            onLoad={() => setLoadingImage(false)}
          />
        )}
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
        <View
          style={{
            width: 20,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={[styles.button, { backgroundColor: `#006400` }]}
            onPress={handleInput}
          >
            <FontAwesomeIcon icon={faCheck} size={20} color="white" />
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "#8b0000" }]}
            onPress={() => navigation.goBack()}
          >
            <FontAwesomeIcon icon={faBan} size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
