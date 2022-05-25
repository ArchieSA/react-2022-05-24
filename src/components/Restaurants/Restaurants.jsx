import { Restaurant } from '../Restaurant/Restaurant';
import { restaurants } from './Restaurants.model';

export const Restaurants = () => {
  return (
    <>
      <h1>Restaurants:</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </>
  );
};
