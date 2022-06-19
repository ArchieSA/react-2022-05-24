import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import AllProductsContainer from "../../containers/AllProducts/AllProducts";

export const AllProductsPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <AllProductsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
