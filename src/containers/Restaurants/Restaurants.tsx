import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFailed,
  selectIsLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import React, { useEffect } from "react";
import { loadRestaurantsIfNotExist } from "../../store/restaurant/thunks/load-restaurants";
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";
import { RootState } from "../../store/store";
import { RestaurantInterface } from "../../store/restaurant";
import { PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

const RestaurantsContainer = () => {
  const dispatch = useAppDispatch();
  const restaurantIds = useAppSelector(selectRestaurantIds);
  const isLoading = useAppSelector(selectIsLoading);
  const isFailed = useAppSelector(selectIsFailed);

  // load restaurants with thunk
  useEffect(() => {
    dispatch<any>(loadRestaurantsIfNotExist());
  }, []);

  // load restaurants with middleware
  // useEffect(() => {
  //   dispatch(loadRestaurants());
  // }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return restaurantIds?.length > 0 ? (
    <Restaurants restaurantIds={restaurantIds} />
  ) : null;
};

export default RestaurantsContainer;
