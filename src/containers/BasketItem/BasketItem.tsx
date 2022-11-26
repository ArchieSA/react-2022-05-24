import { BasketItem } from "../../components/BasketItem/BasketItem";
import useProductWithCount from "../../hooks/useProductWithCount";
import React from "react";

type Props = {
  productId: string
  className: string
}

export const BasketItemContainer = (props: Props) => {
  const { productName, productCount } = useProductWithCount(props.productId);

  return (
    <BasketItem
      productName={productName}
      productCount={productCount}
      className={props.className}
    />
  );
};
