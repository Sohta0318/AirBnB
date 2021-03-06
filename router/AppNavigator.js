import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { NoAuthBottomTabNavigator, ShopNavigator } from "./ShopNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
