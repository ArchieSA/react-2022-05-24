import cartReducer from "./cart/reducer";
import { createStore } from "redux";
import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";
import reviewReducer from "./review/reducer";
import userReducer from "./user/reducer";

const rootReducer = (state, action) => ({
  cart: cartReducer(state?.cart, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
  review: reviewReducer(state?.review, action),
  user: userReducer(state?.user, action),
});

export const store = createStore(rootReducer);
