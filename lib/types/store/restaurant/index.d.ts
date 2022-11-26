import { PayloadAction } from "@reduxjs/toolkit";
export declare type RestaurantState = {
    entities: Record<string, RestaurantInterface>;
    ids: string[];
    status: string;
};
export interface RestaurantInterface {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}
export declare type Acc = Record<string, RestaurantInterface>;
declare const restaurantSlice: import("@reduxjs/toolkit").Slice<RestaurantState, {
    startLoading: (state: RestaurantState) => void;
    failLoading: (state: RestaurantState) => void;
    successLoading: (state: RestaurantState, action: PayloadAction<RestaurantInterface[]>) => void;
}, "restaurant">;
export default restaurantSlice;
