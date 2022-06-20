import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import { ProductDetailsContainer } from "../../containers/ProductDetails/ProductDetails";

export const ProductDetailsPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductDetailsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
