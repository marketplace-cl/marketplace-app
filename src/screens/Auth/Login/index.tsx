import {
  View,
  Text,
  Pressable,
  TextInput,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { makeRequest } from "../../../services/request.service";
import authService from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../store/UserSlice";

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await authService.login(user);
      if (response.success) {
        const { success, ...others } = response;
        dispatch(loginSuccess(others));
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
      <Pressable className="mt-4" onPress={navigation.goBack}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </Pressable>
      <View className="h-[20%]"></View>
      <View className="justify-evenly flex-1">
        <View>
          <Text className="text-4xl font-bold">Hey,</Text>
          <Text className="text-4xl font-bold">Faça login agora!</Text>
        </View>
        <View className="flex-row">
          <Text className="text-gray-400">Já sou usuário / </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text className="font-bold">Criar conta </Text>
          </Pressable>
        </View>
        <View className="gap-4">
          <TextInput
            placeholder="Usuário"
            className="bg-gray-200 py-2 px-3 font-bold"
            value={user.username}
            onChangeText={(value) => setUser({ ...user, username: value })}
          />
          <TextInput
            secureTextEntry
            placeholder="Senha"
            className="bg-gray-200 py-2 px-3 font-bold"
            value={user.password}
            onChangeText={(value) => setUser({ ...user, password: value })}
          />
        </View>
        <View className="flex-row">
          <Text className="text-gray-400">Esqueceu a senha? / </Text>
          <Pressable>
            <Text className="font-bold">Recuperar</Text>
          </Pressable>
        </View>
        <Pressable className="bg-primary py-4 rounded-lg" onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-center font-bold uppercase">Login Now</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
