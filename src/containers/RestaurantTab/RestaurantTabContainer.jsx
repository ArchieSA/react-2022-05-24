import React from "react";
import { Tab } from "../../components/Tab/Tab";
import useSelector from "../../store/Store/hooks/useSelector";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, className }) => {
  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  return <Tab title={restaurantName} to={restaurantId} className={className} />;
};
