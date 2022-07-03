import { useContext } from "react";
import { Button, Pressable, Text, View , StatusBar } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { styles } from "./styles";


export const Logout = () => {
    const { sair } = useContext(AuthContext);
    return (
        <View style={{marginTop:StatusBar.currentHeight || 0, marginStart: '87%', alignItems: "center" }}>
            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-end' }}>
                <Pressable style={styles.button} title='sair' onPress={sair}>
                    <Text style={styles.buttonText}>Sair</Text>
                </Pressable>

            </View>
        </View >
    )
}