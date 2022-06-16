import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/component";
import Menu from "../Menu/Menu";
import MenuContainer from "../../containers/Menu/Menu";
import ReviewContainer from "../../containers/Review/Review";
import ReviewsContainer from "../../containers/Reviews/Reviews";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        <MenuContainer restaurantId={restaurant.id} productIds={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <ReviewsContainer restaurantId={restaurant.id} reviewIds={restaurant.reviews}/>
          
        </div>
      </div>
    </div>
  );
};
