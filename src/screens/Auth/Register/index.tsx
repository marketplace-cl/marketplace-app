import {
  View,
  Text,
  Pressable,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { makeRequest } from "../../../services/request.service";

const Register = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const response = await makeRequest.post("/users/auth/register", {
        ...user,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Constants.statusBarHeight,
      }}
      className="p-4 flex-1"
    >
      <Pressable className="mt-4" onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </Pressable>
      <View className="h-[20%]"></View>
      <View className="justify-evenly flex-1">
        <View>
          <Text className="text-4xl font-bold">Hey,</Text>
          <Text className="text-4xl font-bold">Register Now!</Text>
        </View>
        <View className="gap-4">
          <TextInput
            placeholder="Username"
            className="bg-gray-200 py-2 px-3 font-bold"
            value={user.username}
            onChangeText={(value) => setUser({ ...user, username: value })}
          />
          <TextInput
            placeholder="Email"
            className="bg-gray-200 py-2 px-3 font-bold"
            value={user.email}
            onChangeText={(value) => setUser({ ...user, email: value })}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            className="bg-gray-200 py-2 px-3 font-bold"
            value={user.password}
            onChangeText={(value) => setUser({ ...user, password: value })}
          />
        </View>
        <Pressable
          className="bg-primary py-4 rounded-lg"
          onPress={handleRegister}
        >
          <Text className="text-center font-bold uppercase ">Register Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
