import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default RootNavigation;
