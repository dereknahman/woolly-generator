import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
// import woollyImages from "../images/Images";
// import ImageCard from "./ImageCard";

const GeneratorButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textColor}>Generate Woolly</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.accentColor,
    padding: 20,
    borderRadius: 10,
  },
  textColor: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default GeneratorButton;
