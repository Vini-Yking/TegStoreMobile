import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllCategorias } from '../services/axiosclient';

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const getCategs = async () => {
            const categ = await getAllCategorias();
            // console.log(categ);
            setCategorias(categ.data);
        };
        getCategs();
    }, []);

    const sair = async () => {
        await AsyncStorage.removeItem("@TegMobile:user")
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, sair,categorias }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider // diminui uma importação no código

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}