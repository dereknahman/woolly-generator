import React from "react";
import { Image, StyleSheet } from "react-native";
import woollyImages from "../images/Images";

const ImageCard = () => {
  let randomImage =
    woollyImages[Math.floor(Math.random() * woollyImages.length)];

  return <Image source={randomImage.uri} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 500,
    borderRadius: 10,
  },
});

export default ImageCard;
