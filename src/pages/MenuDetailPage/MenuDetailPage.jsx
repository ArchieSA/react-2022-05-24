import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import { MenuDetailContainer } from "../../containers/MenuDetaiContainer/MenuDetaiContainer";

export const MenuDetailPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <MenuDetailContainer />
      </ErrorBoundary>
    </Layout>
  );
};
