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
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store/store";
import { PayloadAction } from "@reduxjs/toolkit";
import { RestaurantInterface } from "../../store/restaurant";
import { Product } from "../../store/product";

const ProductContainer = () => {
  const dispatch = useAppDispatch();
  const { id: productId } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId)
  );
  console.log(product);
  useEffect(() => {
    dispatch<any>(loadProductIfNot(productId || ""));
  }, []);
  if (!product) {
    return null;
  }
  const { name, price, ingredients } = product;
  console.log({ name, price, ingredients });
  return <ProductDetails name={name} price={price} ingredients={ingredients} />;
};

export default ProductContainer;
