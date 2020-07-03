import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCard from "../../components/ImageCard";
import GeneratorButton from "../../components/GeneratorButton";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageCard />
      </View>
      <View style={styles.button}>
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
  button: {
    marginTop: "5%",
  },
});

export default HomeScreen;
