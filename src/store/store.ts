import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import productSlice from "./product";
import restaurantSlice from "./restaurant";
import reviewSlice from "./review";
import userSlice from "./user";
import { logger1 } from "./middlewares/logger";
import { loadRestaurantsIfNotExistMiddleware } from "./restaurant/middlewares/load-restaurants";
import React from "react";

// const rootReducer = combineReducers({ state, action }) => ({
//   basket: basketSlice.reducer(state?.basket, action),
//   restaurant: restaurantSlice.reducer(state?.restaurant, action),
//   product: productSlice.reducer(state?.product, action),
//   review: reviewSlice.reducer(state?.review, action),
//   user: userSlice.reducer(state?.user, action),
// });

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  restaurant: restaurantSlice.reducer,
  product: productSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger1,
    loadRestaurantsIfNotExistMiddleware,
  ],
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>
// export type AppDispatch = AppStore['dispatch']
