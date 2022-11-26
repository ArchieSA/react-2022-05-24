import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Outlet } from "react-router-dom";
import { MenuReviewContainer } from "../../containers/MenuReviewContainer/MenuReviewContainer";

interface Restaurant {
  id?: string;
  name: string;
  menu: string[];
  reviews: string[];
}
export type RestaurantProps = {
  restaurant: Restaurant;
  rating: number;
};

export const Restaurant = ({ restaurant, rating }: RestaurantProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <MenuReviewContainer />
      <div className={styles.detailedInfo}>
        <Outlet />
      </div>
    </div>
  );
};
