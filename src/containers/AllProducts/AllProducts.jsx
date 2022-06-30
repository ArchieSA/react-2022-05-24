import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectProductIds, selectProductNameById, selectProducts} from "../../store/product/selectors";
import { Products } from "../../components/Products/Products";
import styles from "../../components/Menu/styles.module.css";
import { loadProducts } from "../../store/product/thunk/load-all-product";

const AllProductsContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => selectProducts(state));
  // console.log(products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  if (!products?.length) {
    return null;
  }
  // const productName = useSelector((state) =>
  //     selectProductNameById(state, productId)
  // );
  return <Products products={products} />
  // productIds?.map((productId) => (
  //   <Product
  //     key={productId}
  //     productId={productId}
  //     className={styles.product}
  //   />
  // ));
};

export default AllProductsContainer;
