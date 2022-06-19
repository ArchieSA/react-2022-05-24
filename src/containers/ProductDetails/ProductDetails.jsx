import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { selectIsProductsFailed, selectIsProductsLoading, selectProductById } from "../../store/product/selectors";
import { loadProductIfNotExist } from "../../store/product/thunk/load-product";

const ProductDetailsContainer = ({ className }) => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => selectProductById(state, productId));
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);

  useEffect(() => {
    dispatch(loadProductIfNotExist(productId))
  }, [productId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <ProductDetails product={product} className={className} />;
};

export default ProductDetailsContainer;
