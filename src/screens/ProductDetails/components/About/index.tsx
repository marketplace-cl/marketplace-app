import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../hooks";

const About = () => {
  const product = useAppSelector((state) => state.products.selectedProduct);
  return (
    <View className="mt-4">
      <View className="flex-row">
        <Text className="mr-1 text-gray-500">Brand:</Text>
        {/* <Text className="text-secondary">{`${
          product.brand ?? "Uninformed"
        }`}</Text>
      </View>
      <View className={`${product.description ? "flex-col" : "flex-row"}`}>
        <Text className="mr-1 text-gray-500">Description:</Text>
        <Text className="text-secondary">{`${
          product.description ?? "Uninformed"
        }`}</Text> */}
      </View>
    </View>
  );
};

export default About;
