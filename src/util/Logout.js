import { useContext } from "react";
import { Button, View, StatusBar} from "react-native";
import { AuthContext } from "../context/AuthContext";


export const Logout = () => {
    const { sair } = useContext(AuthContext);
    return (
        <View style={{marginTop:StatusBar.currentHeight || 0, marginStart: '87%', alignItems: "center" }}>
            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-end' }}>
                <Button title='sair' color={"red"} onPress={sair} />
            </View>
        </View>
    )
}