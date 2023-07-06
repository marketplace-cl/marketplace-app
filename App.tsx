import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/routes";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Provider } from "react-redux/es/exports";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <RootNavigation />
      </AuthContextProvider>
    </Provider>
  );
}
