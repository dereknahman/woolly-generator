import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Text>This is where Woolly will be generated</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
