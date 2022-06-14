import React from "react";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";

const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} className={className} />;
};

export default BasketContainer;
