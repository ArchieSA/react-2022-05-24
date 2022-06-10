import React from "react";
import Basket from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/basket/selectors";

const BasketContainer = () => {
  const productId = useSelector(selectBasket);

  return <Basket productId={productId} />;
};

export default BasketContainer;
