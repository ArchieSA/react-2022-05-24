import { RootState } from "../store";
import { Product } from "./index";
export declare const selectProductState: (state: RootState) => import("./index").ProductState;
export declare const selectProductIds: (state: RootState) => string[];
export declare const selectProductById: (state: RootState, id: string) => Product;
export declare const selectProductNameById: (state: RootState, id: string) => string;
export declare const selectIsProductsLoading: (state: RootState) => boolean;
export declare const selectIsProductsFailed: (state: RootState) => boolean;
export declare const selectProducts: (state: RootState) => {
    id: string;
    name: string;
}[];
