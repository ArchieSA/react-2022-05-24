import React from "react";
import Basket from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";

const BasketContainer = ({ className }) => {
  const selectedProducts = useSelector(selectProductIdsFromBasket);

  return (
    <Basket
      className={className}
      productsID = {selectedProducts}
    />
  );
};

export default BasketContainer;
