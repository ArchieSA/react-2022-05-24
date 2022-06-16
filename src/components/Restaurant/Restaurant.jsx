import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/component";
import { MenuContainer } from "../../containers/Menu/Menu";
import { ReviewsContainer } from "../../containers/Reviews/Reviews";
//import Menu from "../Menu/Menu";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        <MenuContainer className={styles.menu} restaurantId={restaurant.id} />
        <div className={styles.reviews}>
          <ReviewsContainer reviewIds={restaurant.reviews} />
        </div>
      </div>
    </div>
  );
};
