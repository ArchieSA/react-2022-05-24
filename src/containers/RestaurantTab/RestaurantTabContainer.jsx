import { Tabs } from "../../components/Tabs/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/restaurant/selectors";
import {Tab} from "../../components/Tab/Tab";

export const RestaurantTabContainer = ({}) => {
  const restaurantName = useSelector((state) =>
      selectRestaurantNameById(state, restaurantId)
  );

  return <Tab tabs={tabs} />;
};
