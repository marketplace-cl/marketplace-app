import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/routes";
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  );
}
