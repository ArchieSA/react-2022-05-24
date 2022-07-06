import React, { useEffect } from "react";
import { MenuContainer } from "../Menu/Menu";
import { ReviewsContainer } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const RestaurantReview = ({}) => {
  const params = useParams();
  const id = params.id;
  // const label = params.label;

      return <ReviewsContainer restaurantId={id} />;

};

export default RestaurantReview;
