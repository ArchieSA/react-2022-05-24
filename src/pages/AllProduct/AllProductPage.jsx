import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import React from "react";
import {Product} from "../../components/Product/Product";
import styles from "../../components/Menu/styles.module.css";
import ProductContainer from "../../containers/Product/Product";
import {useSelector} from "react-redux";
import {selectProductIds} from "../../store/product/selectors";

export const AllProductPage = () => {
    const productIds = useSelector((state) =>
        selectProductIds(state)
    );
  return (
      <Layout>
          <ErrorBoundary>
              {productIds?.map((productId) => (
          <ProductContainer
              key={productId}
              productId={productId}
              className={styles.product}
          />
      ))}
              </ErrorBoundary>
      </Layout>
  );
};
