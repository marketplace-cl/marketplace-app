import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export default About;
