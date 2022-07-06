import React, { useEffect } from "react";
import { MenuContainer } from "../Menu/Menu";
import { ReviewsContainer } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const MenuReview = ({}) => {
  const params = useParams();
  const id = params.id;
  const label = params.label;
  console.log(params);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadReviewsIfNotExist(restaurantId));
  // }, [restaurantId]);

  switch (label) {
    case "menu":
      return <MenuContainer restaurantId={id} />;
    case "review":
      return <ReviewsContainer restaurantId={id} />;
  }
};

export default MenuReview;
