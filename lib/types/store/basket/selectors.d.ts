import { BasketState } from "./index";
import { RootState } from "../store";
declare type BasketProps = {
    state: RootState;
    productId: string;
};
export declare const selectBasket: (state: RootState) => BasketState;
export declare const selectProductIdsFromBasket: (state: RootState) => string[];
export declare const selectProductCountFromBasket: ({ state, productId, }: BasketProps) => number;
export {};
