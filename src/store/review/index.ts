import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {BasketActionPayload, BasketState} from "../basket";

export type ReviewState = {
  entities: Record<string, Review>;
  ids: string[];
  status: string;
};

export interface Review {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

const initialState: ReviewState = {
  entities: {},
  ids: [],
  status: "notStarted",
};
type Acc = Record<string, Review>;

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state: ReviewState, action: PayloadAction<null>) => {
      state.status = "loading";
    },
    failLoading: (state: ReviewState, action: PayloadAction<{}>) => {
      state.status = "failed";
    },
    successLoading: (state: ReviewState, action: PayloadAction<Review[]>) => {
      state.entities = (action.payload || []).reduce(
        (acc: Acc, review) => {
          acc[review.id] = review;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(action.payload || []).map(({ id }) => id)];

      state.status = "success";
    },
    addReview: (state: ReviewState, action: PayloadAction<Review>) => {
      const s: Acc = {};
      const reviewNew = action.payload;
      s[reviewNew.id] = reviewNew;
          console.log(s);
      // if (!reviewNew) {
      //   return state;
      // }
      state.entities = { ...state.entities, ...s};
      state.ids = [...state.ids, action.payload.id];
      state.status = "success";
      return state;
    },
  },
});

export default reviewSlice;
