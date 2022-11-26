import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";

export const NotFoundPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <span>404</span>
      </ErrorBoundary>
    </Layout>
  );
};
