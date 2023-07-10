import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { makeRequest } from "../../../../services/request.service";
import { useAppDispatch } from "../../../../hooks";
import { productSlice } from "../../../../store/ProductSlice";

interface IProps {
  name: string;
  icon: string;
  setProducts: any;
  _id: string;
  selectedCategory: any;
  setSelectedCategory: any;
}

const Categories = ({
  name,
  icon,
  setProducts,
  _id,
  selectedCategory,
  setSelectedCategory,
}: IProps) => {
  async function getFilter() {
    let products;

    if (selectedCategory === _id) {
      setSelectedCategory("");
      products = await makeRequest.get(`/products`);
    } else {
      setSelectedCategory(_id);
      products = await makeRequest.get(`/products?cat=${_id}`);
    }

    setProducts(products?.data);
  }

  const selected = selectedCategory === _id;

  return (
    <TouchableOpacity
      style={{
        opacity: selected ? 1 : 0.5,
      }}
      onPress={getFilter}
      className="mr-3 items-center"
    >
      <View
        className={`${
          selected ? "bg-gray-300" : "bg-gray-200"
        } w-[50px] h-[50px] rounded-full flex justify-center items-center`}
      >
        <FontAwesome name={icon as any} size={20} color="black" />
      </View>
      <Text
        className={`text-xs ${
          selected ? "text-gray-700" : "text-gray-400"
        } mt-2`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Categories;
