import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";

export const MainPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <span>Welcome!!!</span>
      </ErrorBoundary>
    </Layout>
  );
};
