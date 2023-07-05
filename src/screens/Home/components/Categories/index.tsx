import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface IProps {
  name: string;
  icon: string;
}

const Categories = ({ name, icon }: IProps) => {
  return (
    <View className="mr-3 items-center">
      <View className="bg-gray-100 w-[50px] h-[50px] rounded-full flex justify-center items-center">
        <FontAwesome name={icon as any} size={20} color="black" />
      </View>
      <Text className="text-xs text-gray-400 mt-2">{name}</Text>
    </View>
  );
};

export default Categories;
