import React, { useState } from "react";
import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";
import { TabsContainer } from "../../containers/Tabs/Tabs";

export const Restaurants = ({ restaurantId }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurantId);

  return (
    <div className={styles.root}>
      <div>
        <TabsContainer restaurantId={currentRestaurantId} setRestaurantId={setCurrentRestaurantId} />
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
