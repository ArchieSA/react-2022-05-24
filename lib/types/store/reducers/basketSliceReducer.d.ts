import { BasketState } from "../../types/Basket";
import { PayloadAction } from "@reduxjs/toolkit";
export declare const basketSliceReducer: import("@reduxjs/toolkit").Slice<BasketState, {
    add: (state: BasketState, action: PayloadAction<string>) => BasketState;
    remove: (state: BasketState, action: PayloadAction<string>) => BasketState;
}, "basket">;
