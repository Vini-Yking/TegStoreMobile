import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './src/context/AuthContext';
import { Routes } from './src/routes';
import { Home } from './src/screen/Home';
import { Login } from './src/screen/Login'

export default function App() {
  return (
    <AuthProvider>
        <StatusBar />
        <Routes />
    </AuthProvider>
  );
}

