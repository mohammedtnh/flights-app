import React from "react";
import { Spinner } from "native-base";
import { StyleSheet, View } from "react-native";

// Review: redesign the loading
const Loading = () => {
  return (
    <View>
      <Spinner style={styles.container} color="blue" />
    </View>
  );
};

export default Loading;

// Review: move to styles
const styles = StyleSheet.create({
  container: {
    height: "90%",
  },
});
