import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { selectProductIds } from "../../store/product/selectors";
import ListAllProducts from "../../components/ListAllProducts/ListAllProducts";
import {
    selectIsProductsFailed,
    selectIsProductsLoading,
  } from "../../store/product/selectors";
import { loadAllProducts } from "../../store/product/thunk/load-all-products";

export const ProductsListContainer = () => {

    const dispatch = useDispatch();
    const isProductsLoading = useSelector(selectIsProductsLoading);
    const isProductsFailed = useSelector(selectIsProductsFailed);
    const productIds = useSelector(selectProductIds);
    
    useEffect(() => {
        dispatch(loadAllProducts())
    }, []);

    
    if (isProductsFailed) {
        return <span>Error</span>;
    }
    
    return isProductsLoading ? (
        <span>Loading</span>
    ) : (
        <ListAllProducts productIds={productIds} />
    );
}