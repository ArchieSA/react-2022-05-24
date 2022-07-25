import React, { useState } from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { MenuContainer } from "../../containers/Menu/Menu";
import { ReviewsContainer } from "../../containers/Reviews/Reviews";
import { Outlet } from "react-router-dom";
import {MenuReviewContainer} from "../../containers/MenuReviewContainer/MenuReviewContainer";

export const Restaurant = ({ restaurant, rating }) => {
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
