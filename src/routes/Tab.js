import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Clientes } from "../screens/Clientes";
import { Perfil } from "../screens/Perfil";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons/faHouseChimney';



const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator
    screenOptions={({route}) =>({
      tabBarIcon: ({focused, color, size }) =>{
        let iconName;

        if(route.name === "Home"){
          iconName = faHouseChimney;
        }

        return <FontAwesomeIcon icon={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'indigo',
      tabBarInactiveTintColor: 'gray'
    })}
    >
      <MyTab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <MyTab.Screen name="Produtos" component={Produtos} options={{headerShown: false}}/>
      <MyTab.Screen name="Clientes" component={Clientes} options={{headerShown: false}}/>
      <MyTab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
      

    </MyTab.Navigator>
  );
};

export default Tab;
