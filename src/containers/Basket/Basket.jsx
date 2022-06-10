import React from "react";
import Basket from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import {selectProductIdsFromBasket} from "../../store/basket/selectors";

const BasketContainer = () => {
  const productIds = useSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} />;
};

export default BasketContainer;
