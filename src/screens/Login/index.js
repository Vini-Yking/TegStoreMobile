import { View, Text, Button, TextInput, Alert, Image } from "react-native";
import { useState, useContext } from "react";
import { styles } from "./styles";
import { AuthContext , useAuth } from "../../context/AuthContext";
import PngImg from '../../../assets/imgs/imagemlogos/LogoRoxo.png'
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Login = () => {
  const nome = "admin"; // dado mockado
  const pass = "123"; //dado mockado

  const { setUser } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("")

  const handleEntrar = async() => {
    if (usuario == nome && senha == pass) {
      await AsyncStorage.setItem("@TegMobile:user", JSON.stringify(usuario));
      setUser(usuario)
      return
    }
    Alert.alert("não logado" , "Usuário e senha incorretos!");
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
