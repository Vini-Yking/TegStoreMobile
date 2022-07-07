import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllCategorias } from "../services/axiosclient";
import { login } from "../services/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [mostraErro, setMostraErro] = useState(false);
  const [cadastro, setCadastro] = useState(false)

  const handleEntrar = async (nomeInput, senhaInput) => {
    const nome = "admin"; // dado mockado
    const pass = "123"; //dado mockado
    if (nomeInput == nome && senhaInput == pass) {
      const { user } = await login();
      await AsyncStorage.setItem("@TegMobile:user", JSON.stringify(user));
      setUser(user);
      return;
    }
    setMostraErro(true);
  };

  useEffect(() => {
    const getCategs = async () => {
      const categ = await getAllCategorias();
      // console.log(categ);
      setCategorias(categ.data);
    };
    getCategs();
  }, []);

  const sair = async () => {
    await AsyncStorage.removeItem("@TegMobile:user");
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        handleEntrar,
        sair,
        categorias,
        mostraErro,
        setMostraErro,
        cadastro,
        setCadastro
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider; // diminui uma importação no código

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
