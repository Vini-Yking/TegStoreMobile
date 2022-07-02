import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <View >
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

