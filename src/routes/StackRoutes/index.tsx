import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "../TabRoutes";
import ProductDetails from "../../screens/ProductDetails";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import WishList from "../../screens/WishList";
import type { RootStackParamList } from "../../types/Navigation.types";

const Stack = createStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainLayout" component={TabRoutes} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
