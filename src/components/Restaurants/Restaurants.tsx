import React from "react";

import styles from "./styles.module.css";
import { RestaurantTabsContainer } from "../../containers/RestaurantTabs/RestaurantTabsContainer";
import { Outlet } from "react-router-dom";

type Props = {
    restaurantIds: (string | undefined)[]
}
export const Restaurants = ({ restaurantIds }: Props) => {
  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabsContainer />
        <Outlet />
      </div>
    </div>
  );
};
