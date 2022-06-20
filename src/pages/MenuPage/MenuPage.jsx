import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import { MenuContainer } from "../../containers/Menu/Menu";

export const MenuPage = () => {
    return (
      <Layout>
        <ErrorBoundary>
          <MenuContainer />
        </ErrorBoundary>
      </Layout>
    );
  };