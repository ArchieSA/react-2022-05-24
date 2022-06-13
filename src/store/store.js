import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import restaurantSlice from "./restaurant/slice";
import productSlice from "./product/slice";
import reviewSlice from "./review/slice";
import userSlice from "./user/slice";

const rootReducer = (state, action) => ({
  basket: basketSlice.reducer(state?.basket, action),
  restaurant: restaurantSlice.reducer(state?.restaurant, action),
  product: productSlice.reducer(state?.product, action),
  review: reviewSlice.reducer(state?.review, action),
  user: userSlice.reducer(state?.user, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
