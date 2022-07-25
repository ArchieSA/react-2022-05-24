import { Tabs } from "../../components/Tabs/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantIdsFilteredByName,
  selectRestaurants,
} from "../../store/restaurant/selectors";
import { useSearchParams } from "react-router-dom";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";

export const RestaurantTabsContainer = ({}) => {
  // const [searchParams] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state)
  );
  // console.log(restaurantIds);
  if (restaurantIds?.length === 0) {
    return null;
  }

  return (
    <Tabs
      renderTab={({ id, className }) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          className={className}
        />
      )}
      tabIds={restaurantIds}
      // className={className}
    />
  );
};
