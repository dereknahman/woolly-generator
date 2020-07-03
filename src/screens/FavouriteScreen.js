import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite Screen</Text>
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

export default FavouriteScreen;
