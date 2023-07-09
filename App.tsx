import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/routes";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App() {
  const persistedStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistedStore}>
        <RootNavigation />
        <StatusBar style="dark" />
      </PersistGate>
    </Provider>
  );
}
