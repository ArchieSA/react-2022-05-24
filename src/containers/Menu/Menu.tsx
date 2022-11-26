import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import { loadProductsIfNotExist } from "../../store/product/thunk/load-product";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
} from "../../store/product/selectors";
import { selectRestaurantProductsById } from "../../store/restaurant/selectors";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";
import styles from "../../components/Menu/styles.module.css";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  // const params = useParams();
  // console.log(params.id);

  const dispatch = useAppDispatch();
  const isProductsLoading = useAppSelector(selectIsProductsLoading);
  const isProductsFailed = useAppSelector(selectIsProductsFailed);
  const productIds = useAppSelector((state) =>
    selectRestaurantProductsById(state, { restaurantId })
  );
  // console.log(productIds);
  useEffect(() => {
    dispatch<any>(loadProductsIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  return isProductsLoading ? (
    <span>Loading</span>
  ) : (
    <Menu productIds={productIds} />
  );
};
