import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import UserProfile from "../UserProfile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signup">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};

export default RootNavigator;
