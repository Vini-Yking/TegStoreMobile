import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { RotasPrivadas } from "./RotasPrivadas";
import { RotasPublicas } from "./RotasPublicas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

export const Routes = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    if (user) return;
    const handleRefresh = async () => {
      const userBd = await AsyncStorage.getItem("@TegMobile:user");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (userBd) {
        setUser(JSON.parse(userBd));
      }
      setLoading(false);
    };
    handleRefresh();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="indigo" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!!user ? <RotasPrivadas /> : <RotasPublicas />}
    </NavigationContainer>
  );
};
