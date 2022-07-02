import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator>
      <MyTab.Screen name="Home" component={Home} />
      
    </MyTab.Navigator>
  );
};

export default Tab;
