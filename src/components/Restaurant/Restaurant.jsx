import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import Reviews from "../Reviews/Reviews";
import Menu from "../Menu/Menu";

export const Restaurant = ({ restaurant }) => {
  // const restaurantRate = Math.ceil(
  //     restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
  //     restaurant.reviews.length
  // );

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        {/*<Rating value={restaurantRate} />*/}
      </div>
      <div className={styles.detailedInfo}>
        <Menu productIds={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
            <Reviews reviewIds={restaurant.reviews} className={styles.reviews}/>
        </div>
      </div>
    </div>
  );
};
