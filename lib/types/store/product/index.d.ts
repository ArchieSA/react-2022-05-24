import { PayloadAction } from "@reduxjs/toolkit";
export declare type ProductState = {
    entities: Record<string, Product>;
    ids: string[];
    status: string;
};
export interface Product {
    id: string;
    name: string;
    price: number;
    ingredients: [string, string];
}
declare const productSlice: import("@reduxjs/toolkit").Slice<ProductState, {
    startLoading: (state: ProductState, action: PayloadAction<null>) => void;
    failLoading: (state: ProductState, action: PayloadAction<{}>) => void;
    successLoading: (state: ProductState, action: PayloadAction<Product[]>) => void;
}, "product">;
export default productSlice;
