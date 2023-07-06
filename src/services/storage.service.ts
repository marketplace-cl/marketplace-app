import AsyncStorage from "@react-native-async-storage/async-storage";

async function getItem(key: string): Promise<any> {
  const response = await AsyncStorage.getItem(key);

  if (response) {
    return JSON.parse(response);
  } else return [];
}

async function setItem(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export default { getItem, setItem };
