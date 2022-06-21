import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { useEffect } from "react";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
  selectProductById,
} from "../../store/product/selectors";
import { loadProductIfNotExist } from "../../store/product/thunk/load-product";

const ProductDetailContainer = ({ className }) => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, productId));
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);

  useEffect(() => {
    dispatch(loadProductIfNotExist(productId));
  }, [productId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <ProductDetail product={product} className={className} />;
};

export default ProductDetailContainer;
