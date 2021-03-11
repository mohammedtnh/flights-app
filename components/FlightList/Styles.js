import React from "react";
import { StatusBar, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "grey",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
