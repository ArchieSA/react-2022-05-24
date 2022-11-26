import React, { useEffect } from "react";
import { ReviewsContainer } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const RestaurantReview = () => {
  // const params = useParams();
  // const id = params.to;
  // const label = params.label;
  const { restaurantId } = useParams();
  // console.log(restaurantId);

  return <ReviewsContainer restaurantId={restaurantId || ""} />;
};

export default RestaurantReview;
