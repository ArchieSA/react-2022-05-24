import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Outlet } from "react-router-dom";

export const ProductDetailPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Layout>
  );
};

export default ProductDetailPage;
