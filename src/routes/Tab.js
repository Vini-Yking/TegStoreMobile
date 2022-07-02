import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Clientes } from "../screens/Clientes";
import { Perfil } from "../screens/Perfil";


const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator>
      <MyTab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <MyTab.Screen name="Produtos" component={Produtos} options={{headerShown: false}}/>
      <MyTab.Screen name="Clientes" component={Clientes} options={{headerShown: false}}/>
      <MyTab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
      

    </MyTab.Navigator>
  );
};

export default Tab;
