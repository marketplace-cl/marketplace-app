import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Platform,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";

import React from "react";
import About from "./components/About";
import Review from "./components/Review";

const ProductDetails = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.selectedProduct);
  const images = product.images;
  const [viewImage, setViewImage] = React.useState(product.image);
  const [selectedMenu, setSelectedMenu] = React.useState(true);
  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Constants.statusBarHeight,
      }}
    >
      <View className="p-4">
        <View className="flex-row justify-between mb-4">
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            onPress={navigation.goBack}
          />
          <SimpleLineIcons name="bag" size={25} color="black" />
        </View>
        <ImageBackground
          source={{ uri: viewImage }}
          className="p-4 h-[30vh] justify-between"
          imageStyle={{ resizeMode: "cover" }}
        ></ImageBackground>
        <ScrollView className="flex-row mt-2" horizontal>
          {images.map((image: string, index: number) => (
            <Pressable
              key={index}
              className={`h-12 w-12 rounded overflow-hidden mr-3 border-2 ${
                viewImage === image ? "border-primary" : "border-gray-300"
              } `}
              onPress={() => setViewImage(image)}
            >
              <Image
                source={{ uri: image }}
                className="w-full h-full object-cover"
              />
            </Pressable>
          ))}
        </ScrollView>
        <Text className="text-secondary font-bold text-xl mt-2">
          {product.title}
        </Text>
        <View className="flex-row mt-2 items-center">
          <FontAwesome name="star" size={25} color="#eab308" />
          <Text className="ml-1 text-xl font-bold text-secondary">
            {product.rate % 2 == 0
              ? `${product.rate.toFixed(0)}`
              : `${product.rate}`}
          </Text>
        </View>
        <View className="flex-row mt-5">
          <Pressable
            className={`pr-12 border-b-2 ${
              selectedMenu ? " border-primary" : " border-gray-300"
            }`}
            onPress={() => setSelectedMenu(true)}
          >
            <Text className="text-primary text-xl font-bold pb-1">
              About Item
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 pr-12 border-b-2 ${
              selectedMenu === false ? " border-primary" : " border-gray-300"
            }`}
            onPress={() => setSelectedMenu(false)}
          >
            <Text className="text-primary text-xl font-bold  pb-1">
              Reviews
            </Text>
          </Pressable>
        </View>
        {selectedMenu ? <About /> : <Review />}
      </View>
    </View>
  );
};

export default ProductDetails;
