import { selectRestaurantById } from "../restaurant/selectors";

const selectTabRestaurantName = (state, restaurantId) => {
  return selectRestaurantById(state, restaurantId).name;
};

export { selectTabRestaurantName };
