export const ADD_PRODUCT = 'BASKET/ADD_PRODUCT'
export const REMOVE_PRODUCT = 'BASKET/REMOVE_PRODUCT'

export const addProduct = (payload) => ({type: ADD_PRODUCT, payload})
export const removeProduct = (payload) => ({type: REMOVE_PRODUCT, payload})