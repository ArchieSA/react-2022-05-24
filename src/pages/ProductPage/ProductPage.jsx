import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import React from "react";
import ProductsContainer from "../../containers/AllProducts/AllProducts";

export const ProductPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
