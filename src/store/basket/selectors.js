export const selectBasket = (state) => state.basket;

export const selectProductsIdsFromBasket = (state) => Object.keys(selectBasket(state));
export const selectProductCountFromBasket = (state, productId) => selectBasket(state)[productId] || 0;
