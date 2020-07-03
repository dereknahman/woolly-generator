import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCard from "../../components/ImageCard";
import GeneratorButton from "../../components/GeneratorButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageCard />
      </View>
      <View>
        <GeneratorButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    marginVertical: "20%",
  },
});

export default HomeScreen;
