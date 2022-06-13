import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: [normalizedReviews.map(({ id }) => id)],
  };

  const reviewSlice = createSlice({
      name: "review",
      initialState: initialState,
      reducers: {

      },
  });

  export default reviewSlice;