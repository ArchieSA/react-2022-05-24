
export const selectBasket = (state) => state.basket;
export const selectBasketItemIds = (state) => selectBasket(state).ids;
export const selectProductNameFromBasket = (state, productId) => selectBasket(state).entities[productId].name;
export const selectProductCountFromBasket = (state, productId) => selectBasket(state).entities[productId].count || 0;
