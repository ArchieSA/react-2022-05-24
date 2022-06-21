import { useDispatch, useSelector } from "react-redux";
import {
  selectIsProductsFailed,
  selectProducts,
  selectIsProductsLoading,
} from "../../store/product/selectors";
import { loadProductListIfNotExist } from "../../store/product/thunk/load-product";
import { useEffect } from "react";
import { ProductsList } from "../../components/ProductsList/ProductsList";

const ProductsListContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);

  useEffect(() => {
    dispatch(loadProductListIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <ProductsList products={products} className={className} />;
};
export default ProductsListContainer;
