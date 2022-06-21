import React from "react";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import useProductWithCount from "../../hooks/useProductWithCount";

const ProductItemContainer = ({ productId, className }) => {
  const { productName, productCount } = useProductWithCount(productId);

  return (
    <ProductItem
        id={productId}
      name={productName}
      productCount={productCount}
      className={className}
    />
  );
};

export default ProductItemContainer;
