import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Bag from "../../screens/Bag";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Buscar",
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarLabel: "Bolsa",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
