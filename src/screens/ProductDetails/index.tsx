import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Platform,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AntDesign, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import React from "react";
import About from "./components/About";
import Review from "./components/Review";
import { useAppSelector } from "../../hooks";

const ProductDetails = () => {
  const navigation = useNavigation();
  const product = useAppSelector((state) => state?.products?.selectedProduct);
  const images = product.images;
  const [viewImage, setViewImage] = React.useState(product.image);
  const [selectedMenu, setSelectedMenu] = React.useState(true);
  const [favorited, setFavorited] = React.useState(false);

  let pounds = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <ScrollView
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
            <View className="flex-row">
              <SimpleLineIcons
                name="bag"
                size={25}
                color="black"
                style={{ marginRight: 15 }}
              />
              {favorited ? (
                <AntDesign
                  name="heart"
                  size={24}
                  color="#e31b23"
                  onPress={() => setFavorited(false)}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  size={24}
                  color="black"
                  onPress={() => setFavorited(true)}
                />
              )}
            </View>
          </View>
          <ImageBackground
            source={{ uri: viewImage }}
            className="h-[30vh] bg-white rounded"
            imageStyle={{
              resizeMode: "contain",
              width: "100%",
              aspectRatio: 1,
            }}
          ></ImageBackground>
          <ScrollView className="flex-row mt-2" horizontal>
            {images?.map((image: string, index: number) => (
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
      </ScrollView>

      <View
        className="fixed bottom-0 left-0 bg-white p-4 flex-row items-center justify-between shadow-lg pb-5"
        style={{
          borderTopColor: "#4AAD95",
          borderTopWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View>
          <Text className="text-gray-400">Total Price</Text>
          <Text className="text-primary font-bold text-2xl">
            {pounds.format(product.price)}
          </Text>
        </View>
        <View className="flex-row w-[45%] rounded overflow-hidden">
          <Pressable className="bg-primary w-[35%] items-center justify-center flex-row">
            <SimpleLineIcons name="bag" size={18} color="white" />
            <Text className="ml-1 text-white font-bold text-xl">2</Text>
          </Pressable>
          <Pressable className="bg-secondary flex-1 py-3">
            <Text className="text-center text-white">Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ProductDetails;
