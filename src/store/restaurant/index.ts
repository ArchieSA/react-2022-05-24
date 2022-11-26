import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../product";

export type RestaurantState = {
  entities: Record<string, RestaurantInterface>;
  ids: (string | undefined)[];
  status: string;
};

export interface RestaurantInterface {
  id?: string;
  name: string;
  menu: string[];
  reviews: string[];
}

const initialState: RestaurantState = {
  entities: {},
  ids: [],
  status: "notStarted",
};

export type Acc = Record<string, RestaurantInterface>;

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: (state: RestaurantState) => {
      state.entities = {};
      state.ids = [];
      state.status = "loading";
    },
    failLoading: (state: RestaurantState) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
    },
    successLoading: (
      state: RestaurantState,
      action: PayloadAction<RestaurantInterface[]>
    ) => {
      state.entities = (action.payload || []).reduce((acc: Acc, restaurant) => {
        acc[restaurant.id || ""] = restaurant;
        return acc;
      }, {});

      state.ids = (action.payload || []).map(({ id  }) => id);

      state.status = "success";
    },
  },
});

// successLoading: (state, { payload }) => {
//   state.entities = (payload || []).reduce((acc, restaurant) => {
//     acc[restaurant.id] = restaurant;
//     return acc;
//   }, {});
//
//   state.ids = (payload || []).map(({ id }) => id);
//
//   state.status = "success";
// },

export default restaurantSlice;
