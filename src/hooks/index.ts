import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootStateProps, DispatchProps } from "../store";
import type { ScreenNavigatonProp } from "../types/Navigation.types";
import { useNavigation } from "@react-navigation/native";

export const useAppDispatch: () => DispatchProps = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateProps> = useSelector;

export const useAppNavigation: () => ScreenNavigatonProp = useNavigation;
