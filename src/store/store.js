import basketReducer from "./basket/reducer";
import { createStore } from "redux";
import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";
import reviewReducer from "./review/reducerReview";
import usersReducer from "./users/reducersUsers";

const rootReducer = (state, action) => ({
  basket: basketReducer(state?.basket, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
  review: reviewReducer(state?.review, action),
  users: usersReducer(state?.users, action),
});

export const store = createStore(rootReducer);
