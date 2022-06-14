import { useSelector } from "react-redux";
import {selectRestaurantById, selectRestaurantIds} from "../../store/restaurant/selectors";
import React from "react";
import { Tabs } from "../../components/Tabs/Tabs";

const TabsContainer = ({restaurantId, onTabSelect}) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  // const restaurant = useSelector((state) =>
  //     selectRestaurantById(state, restaurantId)
  // );
  console.log(restaurantId);
  return <Tabs restaurantIds={restaurantIds} restaurantId={restaurantId} onTabSelect={onTabSelect} />;
};

export default TabsContainer;
