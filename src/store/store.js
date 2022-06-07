import basketReducer from "./basket/reducer";
import { createStore } from "redux";
import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";

const rootReducer = (state, action) => ({
  basket: basketReducer(state?.basket, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
});

export const store = createStore(rootReducer);
