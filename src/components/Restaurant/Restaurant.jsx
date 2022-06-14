import React from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/component";
import Menu from "../Menu/Menu";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu productIds={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <Reviews reviewIds={restaurant.reviews} />
        </div>
      </div>
    </div>
  );
};
