import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import MenuAllResturantsContainer from "../../containers/MenuAllResturants/MenuAllResturants";

export const MenuPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <MenuAllResturantsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
