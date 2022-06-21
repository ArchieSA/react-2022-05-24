import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
  selectProductById,
} from "../../store/product/selectors";
import { MenuDetail } from "../../components/MenuDetail/MenuDetail";
import { loadProductIfNotExist } from "../../store/product/thunk/load-product";

export const MenuDetailContainer = () => {
  const { id: productId } = useParams();
  console.log('++' + productId);
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

  return <MenuDetail product={product} />;
};