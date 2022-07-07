import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons/faBan";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useContext, useEffect, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import AppStyles from "../../themes/AppStyles";
import { AuthContext } from "../../context/AuthContext";
import { postProduto, putProduto } from "../../services/axiosclient";
import ModalErro from "../../components/ModalErro";
import ModalSucesso from "../../components/ModalSucesso";
import SelectDropdown from 'react-native-select-dropdown'

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
  const [mostrarModalErro, setMostrarModalErro] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");
  const [mostrarModalSucesso, setmostrarModalSucesso] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const semFoto =
    "https://cdn.discordapp.com/attachments/993722091591446629/994427609708507208/unknown.png";
  const [select, setSelect] = useState("");

  useEffect(() => {
    setIdCategoria(String(select.id))
  },[select])

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
        setMensagemErro(response.erros.reduce((a, b) => a + " \n" + b));
        setMostrarModalErro(true);
        return;
      }
      setMensagemSucesso(`O produto ${nomeProduto} foi adicionado com sucesso`);
      setmostrarModalSucesso(true);
      return;
    }
    const response = await handlerPut();
    if (response.status === 400) {
      setMensagemErro(response.erros.reduce((a, b) => a + " \n" + b));
      setMostrarModalErro(true);
      return;
    }
    setMensagemSucesso(`O produto ${nomeProduto} foi alterado com sucesso`);
    setmostrarModalSucesso(true);
  };

  const handlerPut = async () => {
    const response = await putProduto(
      produto.item.idProduto,
      idCategoria,
      nomeProduto,
      quantidadeEstoque,
      valorUnitario,
      produtoFoto
    );
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
    <ScrollView style={styles.container}>
      <View>
        <ModalErro
          modalVisible={mostrarModalErro}
          mensagemErro={mensagemErro}
          setModalVisible={setMostrarModalErro}
        />
      </View>
      <View>
        <ModalSucesso
          mensagemSucesso={mensagemSucesso}
          modalVisible={mostrarModalSucesso}
          setModalVisible={setmostrarModalSucesso}
          onClose={() => navigation.goBack()}
        />
      </View>
      <View style={styles.box}>
        <Image
          source={{ uri: produtoFoto ? produtoFoto : semFoto }}
          style={{ width: 200, height: 200, alignSelf: "center" }}
          onLoad={() => setLoadingImage(false)}
        />

        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          Nome do produto:
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
        <View style={{alignSelf:"center"}}>
          <SelectDropdown
            data={categorias}
            rowTextForSelection={(item, index) => item.categoria}
            defaultValueByIndex={idCategoria - 1}
            buttonTextAfterSelection={(item, index) => item.categoria} 
            onSelect={setSelect}
            buttonStyle={{borderWidth:2 , borderColor:"indigo" , borderRadius:5, backgroundColor:"#8a39e1"}}
          />
        </View>
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
    </ScrollView>
  );
};
