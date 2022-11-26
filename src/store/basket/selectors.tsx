import React from "react";
import { BasketState } from "./index";
import { RootState } from "../store";

type BasketProps = {
  state: RootState;
  productId: string;
};

export const selectBasket = (state: RootState) => state.basket;

export const selectProductIdsFromBasket = (state: RootState) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId) => !!basket[productId]);
};

export const selectProductCountFromBasket = ({
  state,
  productId,
}: BasketProps) => selectBasket(state)[productId] || 0;
