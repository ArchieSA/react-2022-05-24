import React from "react";
import { selectCart } from "../../store/cart/selectors";
import { useSelector } from "react-redux";

import Cart from "../../components/Cart/Cart";

const CartContainer = ({ className }) => {
  const selectedProducts = useSelector(selectCart);

  return <Cart selectedProducts={selectedProducts} className={className} />;
};

export default CartContainer;
