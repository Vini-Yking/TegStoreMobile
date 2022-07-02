import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/context/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
        <StatusBar />
        <Routes />
    </AuthProvider>
  );
}

