import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import ProfileItem from "./components/ProfileItem";
import LineDivider from "../../components/LineDivider";

const Profile = () => {
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

      <TouchableOpacity className="p-3 flex-row items-center justify-between mt-3">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            }}
            className="h-16 w-16 rounded-full"
          />

          <View className="ml-3">
            <Text>Carlos Henrique</Text>
            <Text>Editar Perfil</Text>
          </View>
        </View>

        <Entypo name="chevron-small-right" size={24} color="gray" />
      </TouchableOpacity>

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

      <Pressable className="self-center mt-4">
        <Text className="text-red-500">Sair do App</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
