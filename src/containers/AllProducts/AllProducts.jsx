import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/product/selectors";
import { AllProducts } from "../../components/AllProducts/AllProducts";
import { loadAllProductsIfNotExist } from "../../store/product/thunk/load-all-products";
import classNames from "classnames";
import { selectIsProductsFailed, selectIsProductsLoading } from "../../store/product/selectors";

const AllProductsContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);

  useEffect(() => {
    dispatch(loadAllProductsIfNotExist())
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <AllProducts products={products} className={classNames(className)} />;
};

export default AllProductsContainer;
