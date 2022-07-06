import React, { useCallback } from "react";
import { Product } from "../../components/Product/Product";
import { useDispatch } from "react-redux";
import useProductWithCount from "../../hooks/useProductWithCount";
import basketSlice from "../../store/basket";

const ProductContainer = ({ productId, className }) => {
  const { productName, productCount } = useProductWithCount(productId);

  const dispatch = useDispatch();

  const onRemoveProduct = useCallback(
    () => dispatch(basketSlice.actions.remove(productId)),
    [productId]
  );
  const onAddProduct = useCallback(
    () => dispatch(basketSlice.actions.add(productId)),
    [productId]
  );

  return (
    <Product
      name={productName}
      productCount={productCount}
      removeProduct={onRemoveProduct}
      addProduct={onAddProduct}
      className={className}
    />
  );
};

export default ProductContainer;
