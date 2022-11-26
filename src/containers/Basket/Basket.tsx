import React from "react";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";
import { useAppSelector } from "../../hooks/hook_ts";


const BasketContainer = () => {
  const productIds: string[] = useAppSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} />;
};

export default BasketContainer;
