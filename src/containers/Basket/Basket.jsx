import React from "react";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";

const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} className={className} />;
};

export default BasketContainer;
