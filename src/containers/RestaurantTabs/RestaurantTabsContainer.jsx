import { Tabs } from "../../components/Tabs/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/restaurant/selectors";

export const RestaurantTabsContainer = ({}) => {
  const restaurants = useSelector(selectRestaurants);

  const tabs = restaurants.map(({ name, id }) => ({ label: name, id }));

  return <Tabs tabs={tabs} />;
};
