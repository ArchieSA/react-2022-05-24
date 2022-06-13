import React, { useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurants[0].id);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <Tabs
            tabs={restaurants.map(({ name, id }) => ({ label: name, id }))}
            selectedId={currentRestaurantId}
            onTabSelect={setCurrentRestaurantId}
        />
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
