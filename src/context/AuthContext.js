import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const sair = async () => {
        await AsyncStorage.removeItem("@TegMobile:user")
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, sair }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider // diminui uma importação no código

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}