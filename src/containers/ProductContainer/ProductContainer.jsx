import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductById,
  selectProductIds,
  selectProductNameById,
} from "../../store/product/selectors";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { loadProductIfNot } from "../../store/product/thunk/load-one-product";

const ProductContainer = ({ className }) => {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const product = useSelector((state) => selectProductById(state, productId));
  console.log(product);
  useEffect(() => {
    dispatch(loadProductIfNot(productId));
  }, []);
  if (!product) {
    return null;
  }
  const { name, price, ingredients } = product;
  console.log({ name, price, ingredients });
  return <ProductDetails name={name} price={price} ingredients={ingredients} />;
};

export default ProductContainer;
