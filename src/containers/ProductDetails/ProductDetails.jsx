import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
  selectProductById,
} from '../../store/product/selectors';
import { loadProductIfNotExist } from '../../store/product/thunk/load-product';

export const ProductDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);
  const product = useSelector(state => selectProductById(state, id));

  useEffect(() => {
    dispatch(loadProductIfNotExist(id));
  }, []);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  if (isProductsLoading) {
    return <span>Loading</span>;
  }

  return product ? (
    <ProductDetails
      productName={product.name}
      productPrice={product.price}
      productIngredients={product.ingredients}
    />
  ) : null;
};
