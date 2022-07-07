import { View, Text, TextInput, Image, Pressable } from "react-native";
import { useState, useContext } from "react";
import { styles } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import PngImg from "../../../assets/imgs/imagemlogos/LogoRoxo.png";
import AppStyles from "../../themes/AppStyles";
import ModalErro from "../../components/ModalErro";

export const Login = () => {
  const { handleEntrar, mostraErro, setMostraErro } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.containter}>
      <View>
        <ModalErro
          mensagemErro="Usuário ou senha inválidos"
          modalVisible={mostraErro}
          setModalVisible={setMostraErro}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image source={PngImg} resizeMethod="scale" style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <Text style={AppStyles.title}>Login</Text>
        <TextInput
          value={usuario}
          onChangeText={setUsuario}
          placeholder="Digite Seu Nome"
          style={[styles.input, AppStyles.text]}
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite Sua senha"
          secureTextEntry={true}
          style={[styles.input, AppStyles.text]}
        />
        <View style={styles.button}>
          <Pressable
            title="ENTRAR"
            color={"indigo"}
            onPress={() => handleEntrar(usuario, senha)}
          >
            <Text style={AppStyles.buttonText}>ENTRAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
