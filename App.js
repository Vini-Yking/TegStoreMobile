import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screen/Home';
import { Login } from './src/screen/Login'

export default function App() {
  return (
    <View >
      {/* <Home /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

