import React from "react";
import { Image, StyleSheet } from "react-native";
import woollyImages from "../images/Images";

const ImageCard = (props) => {
  let randomImage =
    woollyImages[Math.floor(Math.random() * woollyImages.length)];

  return (
    <Image
      source={randomImage.uri}
      style={styles.image}
      randomImage={randomImage}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 500,
  },
});

export default ImageCard;
