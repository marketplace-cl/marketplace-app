import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "../TabRoutes";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainLayout"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
