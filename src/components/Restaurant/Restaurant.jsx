import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  return (
    <>
      <h2>{restaurant.name ?? 'Unknown restaurant'}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
};
