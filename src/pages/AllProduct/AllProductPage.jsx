import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import React from "react";
import AllProductsContainer from "../../containers/AllProducts/AllProducts";

export const AllProductPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <AllProductsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
