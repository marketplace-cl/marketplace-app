import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/routes";

export default function App() {
  return (
    <>
      <RootNavigation />
      <StatusBar style="auto" />
    </>
  );
}
