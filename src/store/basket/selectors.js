export const selectBasket = (state) => state.basket;

export const selectProductCountFromBasket = (state, productId) =>
  selectBasket(state)[productId] || 0;

export const selectProductIdsFromBasket = (state) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId) => !!basket[productId]);
};
