import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./store";
import { NavTheme } from "./theme";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
