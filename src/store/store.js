import restaurantReducer from "./restaurant/reducer";
import productReducer from "./product/reducer";
import reviewReducer from "./review/reducer";
import userReducer from "./user/reducer";
import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";

const rootReducer = (state, action) => ({
  basket: basketSlice.reducer(state?.basket, action),
  restaurant: restaurantReducer(state?.restaurant, action),
  product: productReducer(state?.product, action),
  review: reviewReducer(state?.review, action),
  user: userReducer(state?.user, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
