import { View, Text, ImageBackground } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import React from "react";

const ProductDetails = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.selectedProduct);

  return (
    <View className="p-4">
      <View className="flex-row justify-between">
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          onPress={navigation.goBack}
        />
        <SimpleLineIcons name="bag" size={25} color="black" />
      </View>
      <ImageBackground
        source={{ uri: product.image }}
        className="p-4 h-[30vh] justify-between"
        imageStyle={{ resizeMode: "cover" }}
      ></ImageBackground>
    </View>
  );
};

export default ProductDetails;
