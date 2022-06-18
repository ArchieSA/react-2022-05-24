import React, { useCallback } from "react";
import { Product } from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import useProductWithCount from "../../hooks/useProductWithCount";
import basketSlice from "../../store/basket";
import { selectProductIsFailed, selectProductIsLoading } from "../../store/product/selectors";

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
  const isLoading = useSelector(selectProductIsLoading);
  const isFailed = useSelector(selectProductIsFailed);

  if (isLoading || productName == undefined || productName == null) {
    return null;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

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
