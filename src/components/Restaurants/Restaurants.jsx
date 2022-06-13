import React, { useState } from "react";

import { Tabs } from "../Tabs/Tabs";

import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";

export const Restaurants = ({ restaurantIds }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <Tabs
          restaurantIds={restaurantIds}
          selectedId={currentRestaurantId}
          onTabSelect={setCurrentRestaurantId}
        />
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
