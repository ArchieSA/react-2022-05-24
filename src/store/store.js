import basketReducer from "./basket/reducer";
import { createStore } from "redux";
import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";
import reviewsReducer from "./reviews/reducer";
import usersReducer from "./users/reducer";

const rootReducer = (state, action) => ({
  basket: basketReducer(state?.basket, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
  reviews: reviewsReducer(state?.reviews, action),
  users: usersReducer(state?.users, action),
});

export const store = createStore(rootReducer);
