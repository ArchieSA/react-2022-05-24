import React from "react";
import { selectCartProductIds } from "../../store/cart/selectors";
import { useSelector } from "react-redux";

import Cart from "../../components/Cart/Cart";

const CartContainer = ({ className }) => {
  const selectedProductIds = useSelector(selectCartProductIds);

  return <Cart selectedProductIds={selectedProductIds} className={className} />;
};

export default CartContainer;
