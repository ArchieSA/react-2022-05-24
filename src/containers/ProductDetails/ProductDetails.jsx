import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useProductWithCount from "../../hooks/useProductWithCount";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { selectIsProductsLoading, selectIsProductsFailed, selectProductPriceById,  selectProductProductIngredientsById} from "../../store/product/selectors";
import { useEffect } from "react";
import { loadProductDetails } from "../../store/product/thunk/load-product-details";


const ProductDetailsContainer = ({ productId, className }) => {
  const { productName } = useProductWithCount(productId);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);
  const productPrice = useSelector((state) => selectProductPriceById(state, productId));
  const productIngredients = useSelector((state) => selectProductProductIngredientsById(state, productId));

  console.log('from pa', productId, productPrice );
  useEffect(() => {
    dispatch(loadProductDetails(productId));
  }, [])

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return productId?.length > 0 ? (   
    <ProductDetails
        id={productId}
        name={productName}
        className={className}
        ingredinets={productIngredients}
        productPrice={productPrice}
    />
  ) : null;
};

export default ProductDetailsContainer;
