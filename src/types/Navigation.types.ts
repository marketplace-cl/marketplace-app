import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  MainLayout: undefined;
  ProductDetails: undefined;
  Login: undefined;
  Register: undefined;
  WishList: undefined;
  CreateProduct: undefined;
};

export type ScreenNavigatonProp = StackNavigationProp<RootStackParamList>;
