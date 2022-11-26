import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductIds,
  selectProductNameById,
  selectProducts,
} from "../../store/product/selectors";
import { Products } from "../../components/Products/Products";
import styles from "../../components/Menu/styles.module.css";
import { loadProducts } from "../../store/product/thunk/load-all-product";
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";

const AllProductsContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => selectProducts(state));
  // console.log(products);
  useEffect(() => {
    dispatch<any>(loadProducts());
  }, []);
  if (!products?.length) {
    return null;
  }
  // const productName = useSelector((state) =>
  //     selectProductNameById(state, productId)
  // );
  return <Products products={products} />;
  // productIds?.map((productId) => (
  //   <Product
  //     key={productId}
  //     productId={productId}
  //     className={styles.product}
  //   />
  // ));
};

export default AllProductsContainer;
