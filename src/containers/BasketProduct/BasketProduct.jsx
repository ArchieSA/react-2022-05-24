import React from "react";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";
import { BasketProduct } from "../../components/BasketProduct/BasketProduct";

const BasketProductContainer = ({ productId, className }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );

  const productCount = useSelector((state) =>
    selectProductCountFromBasket(state, productId)
  );

  return (
    <BasketProduct
      productName={productName}
      productCount={productCount}
      className={className}
    />
  );
};

export default BasketProductContainer;
