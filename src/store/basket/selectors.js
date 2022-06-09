export const selectBasket = (state) => state.basket;


export const selectProductCountFromBasket = (state, productId) =>
selectBasket(state)[productId] || 0;

export const selectAllProductById  = (state) =>
Object.keys(selectBasket(state)) || 0;

export const selectProductCountById  = (state, productId) =>
  selectBasket(state)[productId] || 0;
//export const selectProductCountById  = (state) =>
//Object.value(selectBasket(state));