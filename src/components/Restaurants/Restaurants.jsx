import React, { useState } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';

import styles from './styles.module.css';
import { Tabs } from '../Tabs/Tabs';

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  const isRestaurantActive = index => index === activeRestaurant;

  const setRestaurant = index => {
    if (!isRestaurantActive(index)) {
      setActiveRestaurant(index);
    }
  };

  return (
    <div className={styles.root}>
      <Tabs
        tabs={restaurants.map(({ id, name }) => ({ id, name }))}
        setActiveTab={setRestaurant}
        isTabActive={isRestaurantActive}
      />
      <div>
        <Restaurant restaurant={restaurants[activeRestaurant]} />
      </div>
    </div>
  );
};
