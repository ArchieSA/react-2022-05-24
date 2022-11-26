export interface BasketState {
    productId?: number;
}
export declare enum UserActionTypes {
    ADD_PRODUCT = "BASKET/ADD_PRODUCT",
    REMOVE_PRODUCT = "BASKET/REMOVE_PRODUCT"
}
interface add {
    type: UserActionTypes.ADD_PRODUCT;
    payload: string;
}
interface remove {
    type: UserActionTypes.REMOVE_PRODUCT;
    payload: string;
}
export declare type BasketAction = add | remove;
export {};
