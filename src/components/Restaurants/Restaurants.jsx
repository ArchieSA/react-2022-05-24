import React, { useState } from "react";

import { Restaurant } from "../Restaurant/Restaurant";
import { Tabs } from "../Tabs/Tabs";

import styles from "./styles.module.css";
import BasketContainer from "../../containers/Basket/Basket";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";

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
        {/*<Tabs*/}
        {/*    tabs={restaurants.map(({ name, id }) => ({ label: name, id }))}*/}
        {/*    selectedId={currentRestaurantId}*/}
        {/*    onTabSelect={setCurrentRestaurantId}*/}
        {/*/>*/}
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket}/>
      </div>
    </div>
  );
};
