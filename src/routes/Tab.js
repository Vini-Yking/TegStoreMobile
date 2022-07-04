import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Clientes } from "../screens/Clientes";
import { Perfil } from "../screens/Perfil";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons/faIdBadge';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
//import { faMicrochip } from '@fortawesome/free-solid-svg-icons/faMicrochip';




const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator
    screenOptions={({route}) =>({
      tabBarIcon: ({color, size }) =>{
        let iconName;

        if(route.name === "Home"){
          iconName = faHouseChimney;
        }
        if (route.name === "Produtos"){
          iconName = faMicrochip;
        }
        if(route.name === "Clientes"){
          iconName = faPeopleGroup;
        }
        if(route.name === "Perfil"){
          iconName = faIdBadge;
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
