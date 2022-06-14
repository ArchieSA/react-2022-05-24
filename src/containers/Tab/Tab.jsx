import { useSelector } from "react-redux";
import {selectRestaurantById, selectRestaurantIds} from "../../store/restaurant/selectors";
import React from "react";
import { Tabs } from "../../components/Tabs/Tabs";
import {Tab} from "../../components/Tab/Tab";

const TabContainer = ({restaurantId, isSelected, onTabSelect, className}) => {

  const restaurant = useSelector((state) =>
      selectRestaurantById(state, restaurantId)
  );
  console.log(isSelected);

  return <Tab       restaurant={restaurant}
                    isSelected={isSelected}
                    onTabSelect={onTabSelect} />;
};

export default TabContainer;
