export const ADD_PRODUCT: "BASKET/ADD_PRODUCT";
export const REMOVE_PRODUCT: "BASKET/REMOVE_PRODUCT";
export function addProduct(payload: any): {
    type: string;
    payload: any;
};
export function removeProduct(payload: any): {
    type: string;
    payload: any;
};
