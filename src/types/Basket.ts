
export interface BasketState {
    productId?: number
}

export enum UserActionTypes {
    ADD_PRODUCT = 'BASKET/ADD_PRODUCT',
    REMOVE_PRODUCT = 'BASKET/REMOVE_PRODUCT',
}

interface add {
    type: UserActionTypes.ADD_PRODUCT;
    payload: string;
}
interface remove {
    type: UserActionTypes.REMOVE_PRODUCT;
    payload: string;
}
export type BasketAction = add | remove