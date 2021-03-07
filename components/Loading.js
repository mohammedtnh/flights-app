import React from "react";
import { Spinner } from "native-base";
import { StyleSheet, View } from "react-native";

const Loading = () => {
  return (
    <View>
      <Spinner style={styles.container} color="blue" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: "90%",
  },
});
