import React from "react";
import { Tab } from "../../components/Tab/Tab";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";
import {useSelector} from "react-redux";

export const RestaurantTabContainer = ({ restaurantId, className }) => {
  // console.log(restaurantId);
  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  return <Tab title={restaurantName} to={restaurantId} className={className} />;
};
