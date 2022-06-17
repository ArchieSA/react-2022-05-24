import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/component";
import Menu from "../Menu/Menu";
import MenuContainer from "../../containers/Menu/Menu";
import { ReviewsContainer } from "../../containers/Reviews/Reviews";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        {/*<Menu productIds={restaurant.menu} className={styles.menu} />*/}
        <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
        <div className={styles.reviews}>
          {/*<Reviews reviewIds={restaurant.reviews} />*/}
          <ReviewsContainer restaurantId={restaurant.id} />
        </div>
      </div>
    </div>
  );
};
