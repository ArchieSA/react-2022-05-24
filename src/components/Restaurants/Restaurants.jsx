import React from "react";

import { Tabs } from "../Tabs/Tabs";

import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";
import { selectRestaurantTabs } from "../../store/restaurant/selectors";
import { useSelector } from "react-redux";

export const Restaurants = ({ restaurantIds, currentRestaurantId, setCurrentRestaurantId }) => {
  const tabs = useSelector(state => selectRestaurantTabs(state));

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <Tabs
          tabs={tabs}
          selectedId={currentRestaurantId}
          onTabSelect={setCurrentRestaurantId}
        />
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
