import {object} from "prop-types";

export const selectBasket = (state) => state.basket;

export const selectProductCountFromBasket = (state, productId) =>
  selectBasket(state)[productId] || 0;

export const selectProductIdsFromBasket = (state) => Object.keys(state.basket);