import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubmitScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Submit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default SubmitScreen;
