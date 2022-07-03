import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { Logout } from '../../util/Logout'

export const Home = () => {

    useEffect(() => {

        console.log()
    }, [])

    return (
        <>
            <Logout />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Tegstore</Text>
            </View>
        </>
    )
}