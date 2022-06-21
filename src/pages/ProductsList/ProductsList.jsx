import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ProductsListContainer from "../../containers/ProductsList/ProductsList";

export const ProductsListPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductsListContainer />
      </ErrorBoundary>
    </Layout>
  );
};

export default ProductsListPage;
