import { useContext } from "react";
import { Button, View } from "react-native";
import { AuthContext } from "../context/AuthContext";


export const Logout = () => {
    const { sair } = useContext(AuthContext);
    return (
        <View style={{ marginStart: '87%', alignItems: "center" }}>
            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-end' }}>
                <Button title='sair' color={"red"} onPress={sair} />
            </View>
        </View>
    )
}