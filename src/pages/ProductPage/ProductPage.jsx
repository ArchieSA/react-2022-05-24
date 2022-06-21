import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import ProductDetailsContainer from "../../containers/ProductDetails/ProductDetails";
import { selectProductById } from "../../store/product/selectors";
import { loadProductDetails } from "../../store/product/thunk/load-product-details";

export const ProductPage = () => {
    const params = useParams();
    console.log('page: ', params.id)
  return (
    <Layout>
      <ErrorBoundary>
        <ProductDetailsContainer productId={params.id}/>
      </ErrorBoundary>
    </Layout>
  );
};