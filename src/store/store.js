import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import productSlice from "./product";
import restaurantSlice from "./restaurant";
import reviewSlice from "./review";
import userSlice from "./user";
import { logger1 } from "./middlewares/logger";
import { loadRestaurantsIfNotExistMiddleware } from "./restaurant/middlewares/load-restaurants";
import { loadProductsIfNotExist } from "./product/thunks/load-products";

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
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    // logger1,
    // loadRestaurantsIfNotExistMiddleware,
  ],
});
