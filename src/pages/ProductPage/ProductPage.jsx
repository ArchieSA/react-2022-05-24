import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";

export const ProductPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductContainer />
      </ErrorBoundary>
    </Layout>
  );
};
