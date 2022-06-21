import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ProductsListContainer } from "../../containers/ProductsList/ProductsList";
import { Outlet } from "react-router-dom";

export const ListOfProductsPage = () => {
    return (
        <Layout>
        <ErrorBoundary>
          <ProductsListContainer/>
          <Outlet/>
        </ErrorBoundary>
      </Layout>
    )
}