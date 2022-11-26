import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import BasketContainer from "../../containers/Basket/Basket";
import React from "react";


export const BasketPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <BasketContainer />
      </ErrorBoundary>
    </Layout>
  );
};
