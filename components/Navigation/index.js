import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Home";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default RootNavigator;
