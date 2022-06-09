import basketReducer from "./basket/reducer";
import { createStore } from "redux";
import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";
import  { reviewReducer } from "./review/reducers";
import userReducer from "./user/reducers";

import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = (state, action) => ({
  basket: basketReducer(state?.basket, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
  review: reviewReducer(state?.review, action),
  user: userReducer(state?.user, action),
});

export const store = createStore(rootReducer, composeWithDevTools());
