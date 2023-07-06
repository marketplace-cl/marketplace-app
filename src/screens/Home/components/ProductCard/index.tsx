import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { productSlice } from "../../../../store/ProductSlice";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  title: string;
  price: number;
  category: string;
  rate: number;
  totalOfReviews: number;
  image: string;
  _id: string;
  comments: any[];
}

const ProductCard = ({
  category,
  image,
  price,
  rate,
  title,
  totalOfReviews,
  _id,
  comments,
}: IProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let pounds = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handlePress = () => {
    dispatch(productSlice.actions.setSelectedProduct(_id));
    navigation.navigate("ProductDetails");
  };

  return (
    <Pressable
      className="h-[300px] w-[46%] rounded-md overflow-hidden m-[2%]"
      onPress={handlePress}
    >
      <Image
        source={{ uri: image }}
        alt={title}
        className="h-[50%] w-full object-cover"
      />
      <View className="p-2 bg-white flex-1 justify-around">
        <Text className="text-gray-400">{category}</Text>
        <Text className="text-secondary font-bold">{title}</Text>
        <View className="flex-row gap-1 items-center">
          <FontAwesome name="star" size={15} color="#eab308" />
          <Text className="text-sm text-gray-400">
            {rate} | {totalOfReviews}
          </Text>
        </View>
        <Text className="text-primary font-bold text-xl">
          {pounds.format(price)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
