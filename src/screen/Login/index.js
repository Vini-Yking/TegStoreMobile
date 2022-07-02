import { View, Text, Button, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

export const Login = () => {
  const user = "admin";
  const pass = "admin";

  const [usuario, setUsuario] = useState("");
  const [senha , setSenha] = useState("")

  const handleEntrar = () => {
    if(usuario == user && senha == pass){
        Alert.alert("entrou");
        return
    }
    Alert.alert("não logado");
  };

  return (
    <View style={styles.containter}>
      <Text style={{ textAlign: "center", fontSize: 100 }}>Login</Text>
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
      <View style={{width:"80%"}}>
      <Button title="ENTRAR" color={"chocolate"} onPress={handleEntrar} />
      </View>
    </View>
  );
};
