import React, { useState } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';
import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';
import classnames from 'classnames';

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  const setRestaurant = index => {
    if (index !== activeRestaurant) {
      setActiveRestaurant(index);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.tabs}>
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.id}>
            <Tab
              tabTitle={restaurant.name}
              setActiveTab={() => setRestaurant(index)}
            />
            {index < restaurants.length - 1 && (
              <span className={classnames('tab-delimiter')}>|</span>
            )}
          </div>
        ))}
      </div>
      <div>
        <Restaurant restaurant={restaurants[activeRestaurant]} />
      </div>
    </div>
  );
};
