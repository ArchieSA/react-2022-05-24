import { normalizedRestaurants } from "../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    // console.log(restaurant)
    acc[restaurant.id] = restaurant;
// console.log(acc[restaurant.id])

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(( {id} ) => id),
};
// console.log(initialState)
const restaurantReducer = (state = initialState, action) => {
  switch (action?.type) {
    default:
      return state;
  }
};
// console.log(restaurantReducer)
export default restaurantReducer;
