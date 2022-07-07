import { View, Text, FlatList, TextInput, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BotaoLogout } from "../../components/BotaoLogout/index.js";
import { styles } from "./styles";
import {
  getProdutoByName,
  getAllProdutosPaginados,
  deleteProduto,
  getAllProdutosByCategoria,
} from "../../services/axiosclient";
import { AuthContext } from "../../context/AuthContext";
import AppStyles from "../../themes/AppStyles";
import { CardProduto } from "./components/CardProduto";
import { BotaoAdicionar } from "../../components/BotaoAdicionar/index.js";
import { FooterList } from "./components/FooterList/index.js";
import { BotaoPesquisa } from "../../components/BotaoPesquisa/index.js";
import { TapGestureHandler } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import ModalConfirmacao from "../../components/ModalConfirmacao/index.js";
import ModalSucesso from "../../components/ModalSucesso/index";

export const Produtos = ({ navigation, route }) => {
  const { categoria } = route.params;
  const semFoto =
    "https://cdn.discordapp.com/attachments/993722091591446629/994427609708507208/unknown.png";
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [apagando, setApagando] = useState(false);
  const { categorias } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [option, setOption] = useState("");
  const [acabou, setAcabou] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [perguntaConfirmacao, setPerguntaConfirmacao] = useState("");
  const [mostrarModalSucesso, setMostrarModalSucesso] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const ref = React.useRef();

  const handleBuscaPaginada = async () => {
    if (loading) return;
    if (acabou) return;
    console.log(categoria);
    setLoading(true);
    const pageSize = 15;
    if (categoria) {
      const produtos = await getAllProdutosByCategoria(
        categoria.id,
        page,
        pageSize
      );
      if (produtos.data.content.length < pageSize) setAcabou(true);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
    } else if (nomeProduto.length === 0) {
      const produtos = await getAllProdutosPaginados(page, pageSize);
      if (produtos.data.content.length < pageSize) setAcabou(true);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
    } else {
      const produtos = await getProdutoByName(nomeProduto, page, pageSize);
      if (produtos.data.content.length < pageSize) setAcabou(true);
      setListaProdutos([...listaProdutos, ...produtos.data.content]);
    }
    setPage((page) => page + 1);
    setLoading(false);
  };

  const handlePesquisa = () => {
    setAcabou(false);
    setListaProdutos([]);
    setPage(0);
    setNomeProduto(pesquisa);
  };

  useEffect(() => {
    handleBuscaPaginada();
  }, [apagando, nomeProduto]);

  useEffect(() => {
    if (!categoria) return;
    handleCategoria();
  }, []);

  const handleCategoria = () => {
    setOption(categoria);
  };

  const handleNavigation = (item) => {
    navigation.navigate("DetalhesProduto", {
      produto: { item },
    });
  };

  const handleEditar = (item) => {
    setCadastro(true);
    navigation.navigate("Cadastro", {
      produto: { item },
    });
  };

  const handleCriar = () => {
    navigation.navigate("Cadastro", {
      produto: "",
    });
  };

  const handleDelete = async (item) => {
    setListaProdutos([]);
    const response = await deleteProduto(item.idProduto);
    setMostrarModal(false);
    window.scrollTo({ top: 0 });
    setPage(0);
    setAcabou(false);
    setApagando(!apagando);
    setMensagemSucesso(`${item.nomeProduto} excluido com sucesso!`);
    setMostrarModalSucesso(true);
  };

  const handleModal = (item) => {
    setPerguntaConfirmacao(
      `Tem certeza que deseja apagar o item ${item.nomeProduto}?`
    );
    setItemSelecionado(item);
    setMostrarModal(true);
  };

  return (
    <>
      <View>
        <ModalSucesso
          mensagemSucesso={mensagemSucesso}
          modalVisible={mostrarModalSucesso}
          onClose={() => setMostrarModalSucesso(false)}
          setModalVisible={setMostrarModalSucesso}
        />
      </View>
      <View>
        <ModalConfirmacao
          modalVisible={mostrarModal}
          setModalVisible={setMostrarModal}
          onCancel={() => setMostrarModal(false)}
          onConfirm={() => handleDelete(itemSelecionado)}
          pergunta={perguntaConfirmacao}
        />
      </View>
      <SafeAreaView ref={ref} style={styles.containter}>
        <View style={styles.headerContainer}>
          <BotaoLogout />
          <Text style={[AppStyles.title, { marginTop: 3 }]}>
            Catalogo {option}
          </Text>
          <View style={styles.pesquisaContainer}>
            <TextInput
              placeholder="Buscar"
              style={[styles.input, AppStyles.text]}
              value={pesquisa}
              onChangeText={setPesquisa}
            />
            <BotaoPesquisa onPress={handlePesquisa} />
          </View>
          <BotaoAdicionar onPress={handleCriar} />
        </View>

        <SafeAreaView style={styles.produtosContainer}>
          <FlatList
            style={{ width: "100%" }}
            data={listaProdutos}
            showsVerticalScrollIndicator={true}
            onEndReached={handleBuscaPaginada}
            renderItem={({ item }) => (
              <CardProduto
                nomeProduto={item.nomeProduto}
                valorUnitario={item.valorUnitario}
                categoria={item.categoria.categoria}
                urlFoto={item.urlFoto ? item.urlFoto : semFoto}
                item={item}
                navigation={() => handleNavigation(item)}
                handleEditar={handleEditar}
                handleDelete={() => handleModal(item)}
              />
            )}
            keyExtractor={(item) => String(item.idProduto)}
            ListFooterComponent={<FooterList load={loading} />}
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};
