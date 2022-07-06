import React, { useEffect } from "react";
import { MenuContainer } from "../Menu/Menu";
import { ReviewsContainer } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const RestaurantMenu = ({}) => {
  const params = useParams();
  const id = params.id;
  // const label = params.label;

      return <MenuContainer restaurantId={id} />;

};

export default RestaurantMenu;
