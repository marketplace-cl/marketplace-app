import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import Constants from "expo-constants";
import { Entypo, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProfileItem from "./components/ProfileItem";
import LineDivider from "../../components/LineDivider";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../store/UserSlice";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const currentUser = useAppSelector((state) => state.user.currentUser?.data);
  const dispatch = useAppDispatch();

  async function handleLogout() {
    await AsyncStorage.removeItem("persist:root");
    dispatch(logout());
  }

  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Constants.statusBarHeight,
      }}
      className="p-3 bg-white flex-1"
    >
      <Text className="self-center text-base mt-2">Meu Perfil</Text>

      {currentUser ? (
        <TouchableOpacity
          onPress={() => {}}
          className="p-3 flex-row items-center justify-between mt-3"
        >
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
              }}
              className="h-16 w-16 rounded-full"
            />

            <View className="ml-3">
              <Text className="text-base text-zinc-800 font-semibold">
                {currentUser.username}
              </Text>
              <Text className="text-sm text-gray-500 font-medium">
                Editar conta
              </Text>
            </View>
          </View>

          <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className=" mt-4 rounded p-3 flex-row items-center justify-between"
        >
          <Text className="text-red-500 font-semibold w-[75%]">
            Você está desconectado! Faça login para acessar seu perfil.
          </Text>

          <Entypo name="chevron-small-right" size={24} color="gray" />
        </TouchableOpacity>
      )}

      <ProfileItem
        title="Pedidos"
        subtitle="Meus Pedidos"
        icon={<AntDesign name="creditcard" size={24} color="gray" />}
      />

      <LineDivider />

      <Text className="text-gray-600 text-sm">Configuração e suporte</Text>

      <ProfileItem
        title="Endereços"
        subtitle="Meus endereços de entrega"
        icon={<Ionicons name="location-sharp" size={24} color="gray" />}
      />

      <ProfileItem
        title="Notificações"
        subtitle="Minha central de notificações"
        icon={<Ionicons name="notifications" size={24} color="gray" />}
      />

      {currentUser?.isAdmin && (
        <ProfileItem
          title="Adicionar Produtos"
          subtitle="Área administrativa"
          icon={<MaterialIcons name="add-business" size={24} color="gray" />}
        />
      )}

      <Pressable onPress={handleLogout} className="self-center mt-4">
        <Text className="text-red-500">Sair do App</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
