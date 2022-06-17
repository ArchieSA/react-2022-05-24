import React from 'react';

import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import Menu from '../Menu/Menu';
import ReviewsContainer from '../../containers/Reviews/Reviews';

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu productIds={restaurant.menu} className={styles.menu} />
        <ReviewsContainer
          className={styles.reviews}
          reviewIds={restaurant.reviews}
        />
      </div>
    </div>
  );
};
