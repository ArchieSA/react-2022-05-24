import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
  
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  };

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: initialState,
    reducers: {

    }
});

export default restaurantSlice;

