import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { Logout } from '../../util/Logout'

export const Clientes = () => {
    
    return (
        <>
        <Logout/>
        <View style={{ flex:1 , alignItems:"center" , justifyContent:"center"}}>
            <Text>Clientes</Text>
        </View>
        </>
    )
}