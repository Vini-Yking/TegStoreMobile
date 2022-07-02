import { View, Text, Button, TextInput, Alert, Image } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import PngImg from '../../../assets/imgs/imagemlogos/LogoRoxo.png'


export const Login = () => {
  const user = "admin";
  const pass = "admin";

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("")

  const handleEntrar = () => {
    if (usuario == user && senha == pass) {
      Alert.alert("entrou");
      return
    }
    Alert.alert("não logado");
  };

  return (

    <View style={styles.containter}>
      <Image source={PngImg} resizeMethod="scale" style={{
        width: '80%',
        height: '30%',
        marginHorizontal:-70
      }} />
      <Text style={{ textAlign: "center", fontSize: 30 }}>Login</Text>
      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Digite Seu Nome"
        style={styles.input}
      />
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite Sua senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={{ width: "60%" }}>
        <Button title="ENTRAR" color={"indigo"} onPress={handleEntrar} />
      </View>
    </View>
  );
};
