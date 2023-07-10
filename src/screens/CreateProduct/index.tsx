import {
  View,
  Text,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Picker } from "@react-native-picker/picker";
import { makeRequest } from "../../services/request.service";
import { useAppSelector } from "../../hooks";

export default function CreateProduct() {
  const [categories, setCategories] = useState([]);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const [selectedItem, setSelectedItem] = useState();
  const [counter, setCounter] = useState(1);
  let controllerList = [];
  let imagesList: string[] = [];
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    images: imagesList,
    quantity: "",
  });

  for (let i = 1; i <= counter; i++) {
    controllerList.push(
      <TextInput
        placeholder={`Imagem ${i}`}
        className="p-3 bg-gray-200 rounded w-full"
        value={product.image}
        onChangeText={(value) => imagesList.push(value)}
        key={i}
      />
    );
  }

  useEffect(() => {
    async function fetchItems() {
      const response = await makeRequest.get("/categories");
      setCategories(response.data);
    }
    fetchItems();
  }, []);

  async function createProduct() {
    try {
      await makeRequest.post(
        "/products",
        {
          ...product,
          categoryId: selectedItem,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser?.accessToken}`,
          },
        }
      );
      setProduct({
        title: "",
        price: "",
        image: "",
        images: imagesList,
        quantity: "",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Constants.statusBarHeight,
      }}
      className="flex-1 bg-[#f2f1f6] gap-y-3 p-4 items-center justify-center"
    >
      <TextInput
        placeholder="Titulo"
        className="p-3 bg-gray-200 rounded w-full"
        value={product.title}
        onChangeText={(value) => setProduct({ ...product, title: value })}
      />
      <TextInput
        placeholder="Preço"
        className="p-3 bg-gray-200 rounded w-full"
        value={product.price}
        onChangeText={(value) => setProduct({ ...product, price: value })}
      />
      <TextInput
        placeholder="Imagem Principal"
        className="p-3 bg-gray-200 rounded w-full"
        value={product.image}
        onChangeText={(value) => setProduct({ ...product, image: value })}
      />
      {controllerList}

      <Pressable
        className="bg-green-400 p-4 rounded-lg"
        onPress={() => setCounter(counter + 1)}
      >
        <Text className="text-white">Adicionar mais uma</Text>
      </Pressable>
      <TextInput
        placeholder="Quantidade"
        className="p-3 bg-gray-200 rounded w-full"
        value={product.quantity}
        onChangeText={(value) => setProduct({ ...product, quantity: value })}
      />

      <Picker
        style={{
          width: "100%",
        }}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedItem(itemValue);
        }}
      >
        {categories?.map((item: any) => {
          return (
            <Picker.Item label={item.name} value={item._id} key={item._id} />
          );
        })}
      </Picker>

      <TouchableOpacity
        onPress={createProduct}
        className="p-3 w-full rounded bg-green-400 items-center justify-center mt-4"
      >
        <Text className="text-base text-white">Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
