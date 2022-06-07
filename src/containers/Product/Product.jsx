import React, { useCallback, useState } from "react";
import { Product } from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";
import { addProduct, removeProduct } from "../../store/basket/actions";

const ProductContainer = ({ productId, className }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  const dispatch = useDispatch();
  const productCount = useSelector((state) =>
    selectProductCountFromBasket(state, productId)
  );

  const onRemoveProduct = useCallback(
    () => dispatch(removeProduct(productId)),
    [productId]
  );
  const onAddProduct = useCallback(
    () => dispatch(addProduct(productId)),
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
