import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface IProps {
  title: string;
  price: number;
  categorie: string;
  rate: number;
  totalOfReviews: number;
  image: string;
}

const ProductCard = ({
  categorie,
  image,
  price,
  rate,
  title,
  totalOfReviews,
}: IProps) => {
  return (
    <View className="h-[250px] w-[46%] rounded-md overflow-hidden m-[2%]">
      <Image
        source={{ uri: image }}
        alt={title}
        className="h-[50%] w-full object-cover"
      />
      <View className="p-2 bg-white flex-1 justify-around">
        <Text className="text-gray-400">{categorie}</Text>
        <Text className="text-secondary font-bold">{title}</Text>
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-1 items-center">
            <FontAwesome name="star" size={15} color="#eab308" />
            <Text className="text-sm text-gray-400">
              {rate} | {totalOfReviews}
            </Text>
          </View>
          <Text className="text-primary font-bold text-xl">
            ${price.toFixed(2).replace(".", ",")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
