import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../context/AuthContext';


export const Perfil = () => {
    const { setUser } = useContext(AuthContext);
    
    const sair = async() =>{
        await AsyncStorage.removeItem("@TegMobile:user")
        setUser(null)
    } 

    return (
        <View style={{ flex:1 , alignItems:"center" , justifyContent:"center"}}>
            <Text>Perfil</Text>
            <Button title='sair' color={"red"} onPress={sair} />
        </View>
    )
}