import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Bag from "../../screens/Bag";
import Profile from "../../screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home" size={30} color={"#4AAD95"} />
            ) : (
              <Ionicons name="home-outline" size={30} color="gray" />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="search" size={30} color={"#4AAD95"} />
            ) : (
              <Ionicons name="search-outline" size={30} color="gray" />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="cart" size={30} color={"#4AAD95"} />
            ) : (
              <Ionicons name="cart-outline" size={30} color="gray" />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="person" size={30} color={"#4AAD95"} />
            ) : (
              <Ionicons name="person-outline" size={30} color="gray" />
            ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
