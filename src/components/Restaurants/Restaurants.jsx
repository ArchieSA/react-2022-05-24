import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Restaurant } from "../Restaurant/Restaurant";
import { Tabs } from "../Tabs/Tabs";
import styles from "./styles.module.css";
import RestaurantContainer from "../../containers/Restaurant/Restaurant";
import BasketContainer from "../../containers/Basket/Basket";
import { Reviews } from "../Reviews/component";
import { selectRestaurantReviewIdsById } from "../../store/restaurant/selectors";

export const Restaurants = ({ restaurantIds }) => {
  const [currentRestaurantId] = useState(restaurantIds[0]);
  const restaurantReviewIds = useSelector(state => selectRestaurantReviewIdsById(state, currentRestaurantId));
    
  return (
    <div className={styles.root}>
      <div>
        {/*<Tabs*/}
        {/*    tabs={restaurants.map(({ name, id }) => ({ label: name, id }))}*/}
        {/*    selectedId={currentRestaurantId}*/}
        {/*    onTabSelect={setCurrentRestaurantId}*/}
        {/*/>*/}
        <RestaurantContainer restaurantId={currentRestaurantId} />
        <BasketContainer className={styles.basket} />
        <Reviews reviewIds={restaurantReviewIds} />
      </div>
    </div>
  );
};
