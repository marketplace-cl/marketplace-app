import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Bag from "../../screens/Bag";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
