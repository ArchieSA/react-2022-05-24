export const selectBasket = (state) => state.basket;


export const selectProductCountFromBasket = (state, productId) =>
  selectBasket(state)[productId] || 0;

  export const selectAllProductCountFromBasket = (state, productId) =>
  selectBasket(state)[productId];