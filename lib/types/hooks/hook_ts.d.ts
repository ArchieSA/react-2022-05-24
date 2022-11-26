import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/store";
export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
