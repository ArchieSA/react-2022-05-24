import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import RestaurantsContainer from "../../containers/Restaurants/Restaurants";
import { Layout } from "../../components/Layout/Layout";

export const RestaurantsPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <RestaurantsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
