import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import React, { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/thunk/load-reviews";
import { Outlet, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hook_ts";

const RestaurantContainer = () => {
  // const params = useParams();
  // console.log(params);
  // const restaurantId = params.to;
  const { restaurantId } = useParams();
  const dispatch = useAppDispatch();
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId || "")
  );
  const rating = useAppSelector((state) =>
    selectRestaurantRating(state, restaurantId || "")
  );

  useEffect(() => {
    dispatch<any>(loadReviewsIfNotExist(restaurantId || ""));
  }, [restaurantId || ""]);

  return <Restaurant restaurant={restaurant} rating={rating} />;
};

export default RestaurantContainer;
