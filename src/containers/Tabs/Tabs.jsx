import { useSelector } from "react-redux";
import {selectRestaurantById, selectRestaurantIds} from "../../store/restaurant/selectors";
import React from "react";
import { Tabs } from "../../components/Tabs/Tabs";

const TabsContainer = ({isSelected, onTabSelect}) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  // const restaurant = useSelector((state) =>
  //     selectRestaurantById(state, restaurantId)
  // );
  // console.log(restaurantId);
  return <Tabs restaurantIds={restaurantIds} isSelected={isSelected} onTabSelect={onTabSelect} />;
};

export default TabsContainer;
