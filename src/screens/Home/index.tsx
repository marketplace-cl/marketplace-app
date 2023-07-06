import {
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../types/ProductState.types";
import { makeRequest } from "../../services/request.service";
import { useDispatch } from "react-redux";
import { productSlice } from "../../store/ProductSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

const Home = () => {
  const [products, setProducts] = React.useState<Product[] | []>([]);
  const [categories, setCategories] = React.useState<
    Array<{ _id: string; name: string; icon: string }> | []
  >([]);
  const { bottom } = useSafeAreaInsets();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    pullData();
  }, []);

  const pullData = async () => {
    const [productResponse, categoryResponse] = await Promise.all([
      makeRequest.get("/products"),
      makeRequest.get("/categories"),
    ]);
    setProducts(productResponse.data);
    setCategories(categoryResponse.data);
    dispatch(productSlice.actions.setProducts(productResponse.data));
  };

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
            Descubra a moda que combina com o seu estilo
          </Text>
          <Pressable
            className="bg-secondary py-2 px-3 w-[130px] rounded-md"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className=" text-white mx-auto">Checar agora</Text>
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
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
