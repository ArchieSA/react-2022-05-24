export const selectBasket = (state) => state.basket;

export const selectProductCountFromBasket = (state, productName) => selectBasket(state)[productName] || 0;