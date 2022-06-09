export const selectBasket = (state) => state.basket;


export const selectProductIdsFromBasket = (state) => selectBasket(state).ids;
export const selectProductNameByIdFromBasket = (state, id) =>
selectBasket(state).entities[id]?.name;

export const selectProductCountFromBasket = (state, productId) =>
  selectBasket(state)[productId] || 0;
