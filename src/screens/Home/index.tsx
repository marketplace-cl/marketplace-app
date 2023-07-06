import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import categories from "../../data/categories";
import Categories from "./components/Categories";
import clothes from "../../data/clothes";
import ProductCard from "./components/ProductCard";
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom * 1.5,
      }}
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Constants.statusBarHeight,
      }}
    >
      <ImageBackground
        source={require("../../../assets/clothesBg.jpg")}
        className="p-4 h-[30vh] justify-between"
        imageStyle={{ resizeMode: "cover" }}
      >
        <View className="flex-row gap-2 items-center">
          <View className="flex-row flex-1 border-neutral-300 border-2 gap-2 items-center rounded-md">
            <Ionicons name="search" size={24} color="#d4d4d4" />
            <TextInput placeholder="Search.." className="flex-1" />
          </View>
          <SimpleLineIcons name="bag" size={24} color="black" />
        </View>
        <View className="gap-2 w-2/3">
          <Text className="uppercase text-secondary font-bold text-lg">
            #Fashion Day
          </Text>
          <Text className="uppercase text-secondary font-bold text-4xl">
            80% OFF
          </Text>
          <Text className="text-gray-600">
            Discover fashion that suits to your style
          </Text>
          <Pressable className="bg-secondary py-2 px-3 w-[130px] rounded-md">
            <Text className=" text-white mx-auto">Check this out</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <ScrollView
        horizontal
        className="p-5 bg-white"
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <Categories key={index} {...category} />
        ))}
      </ScrollView>

      <View className="flex-row flex-wrap">
        {clothes.map((cloth, index) => (
          <ProductCard key={index} {...cloth} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
