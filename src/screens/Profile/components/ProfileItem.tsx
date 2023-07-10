import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

type ProfileItemProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  onPress?: () => void;
};
export default function ProfileItem({
  icon,
  subtitle,
  title,
  onPress,
}: ProfileItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-[#f5f5f5] mt-3 flex-row items-center justify-between p-4 rounded-lg"
    >
      <View className="flex-row items-center">
        {icon}
        <View className="ml-4">
          <Text className="text-base font-medium">{title}</Text>
          <Text className="text-xs font-medium text-gray-500">{subtitle}</Text>
        </View>
      </View>

      <Entypo name="chevron-small-right" size={24} color="gray" />
    </TouchableOpacity>
  );
}
