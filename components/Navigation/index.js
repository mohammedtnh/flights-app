import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import UserProfile from "../UserProfile";
import FlightList from "../FlightList";
import Search from "../Search";

const { Navigator, Screen } = createStackNavigator();

// Review: return the init to home at the end
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">
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
      <Screen
        name="FlightList"
        component={FlightList}
        options={{ headerShown: true }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};

export default RootNavigator;
