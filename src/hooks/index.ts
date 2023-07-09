import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootStateProps, DispatchProps } from "../store";

export const useAppDispatch: () => DispatchProps = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateProps> = useSelector;
