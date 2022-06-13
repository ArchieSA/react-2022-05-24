import React from "react";

import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";
import TabsContainer from "../../containers/Tabs/Tabs";
import { useSelector } from "react-redux";
import { selectCurrentTabId } from "../../store/tabs/selectors";

export const Restaurants = ({ restaurantIds }) => {

  const currentRestaurantId = useSelector(selectCurrentTabId);

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
          <TabsContainer />
          <RestaurantContainer restaurantId={currentRestaurantId} />
          <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
