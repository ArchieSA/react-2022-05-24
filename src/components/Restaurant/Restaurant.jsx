import { Menu } from '../Menu/Menu';
import { Rate } from '../Rate/Rate';
import { Reviews } from '../Reviews/Reviews';

import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
  const rating = Number(restaurant.reviews.reduce((acc, curr) => acc + curr.rating, 0) / restaurant.reviews.length).toFixed(2);

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>{restaurant.name}</h2>
        <Rate value={Number(rating) || 0} className={styles.rate} />
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
