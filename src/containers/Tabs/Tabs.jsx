import React from "react";
import { useSelector } from "react-redux";
import { selectTabRestaurantName } from "../../store/tabs/selectors";
import { Tab } from "../../components/Tab/Tab";

const TabsContainer = ({
  restaurantId,
  onTabSelect,
  isSelected,
  className,
}) => {
  const restaurantName = useSelector((state) =>
    selectTabRestaurantName(state, restaurantId)
  );
  return (
    <Tab
      label={restaurantName}
      onTabSelect={onTabSelect}
      isSelected={isSelected}
      className={className}
    />
  );
};
export default TabsContainer;
