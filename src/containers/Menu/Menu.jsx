import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../../components/Menu/Menu";
import { selectRestaurantProductIds } from "../../store/restaurant/selectors";
import { selectIsFailed,  selectIsLoading } from "../../store/product/selectors";
import {
    loadProductsIfNotExist,
  } from "../../store/product/thunk/load-products";



export const MenuContainer = ({ className, restaurantId}) => {
    const productId =  useSelector((state) =>
    selectRestaurantProductIds(state, restaurantId)
  );

  //const productIds = useSelector((state) => selectRestaurantMenuIds(state, restaurantId))

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  useEffect(() => {
      console.log(restaurantId)
    dispatch(loadProductsIfNotExist(restaurantId));
  }, [restaurantId]);


  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

   return (
       <Menu productIds={productId} className={ className }/>
   ) 
}