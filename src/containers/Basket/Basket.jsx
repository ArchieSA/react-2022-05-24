import React from "react";
import { selectBasket } from "../../store/basket/selectors";
import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";

const BasketContainer = ({ className }) => {
  const selectedProducts = useSelector(selectBasket);
  return <Basket selectedProducts={selectedProducts} className={className} />;
};

export default BasketContainer;
