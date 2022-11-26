import { PayloadAction } from "@reduxjs/toolkit";
export declare type BasketState = Record<string, number>;
export interface BasketActionPayload {
    productId: string;
    className: string;
}
declare const basketSlice: import("@reduxjs/toolkit").Slice<BasketState, {
    add: (state: BasketState, action: PayloadAction<BasketActionPayload>) => BasketState;
    remove: (state: BasketState, action: PayloadAction<BasketActionPayload>) => BasketState;
    clean: () => {};
}, "basket">;
export default basketSlice;
