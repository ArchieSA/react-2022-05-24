import { RootState } from "../store";

export const selectReviewState = (state: RootState) => state.review;
export const selectReviewIds = (state: RootState) =>
  selectReviewState(state).ids;

export const selectReviewById = (state: RootState, id: string | undefined) =>
  selectReviewState(state).entities[id || ""];

export const selectReviewByIds = (state: RootState, ids: (string | undefined)[]) => {
  const reviewById = selectReviewState(state).entities;

  return ids.map((id) => reviewById[id || ""]);
};

export const selectIsReviewsLoading = (state: RootState) =>
  selectReviewState(state).status === "loading";
export const selectIsReviewsFailed = (state: RootState) =>
  selectReviewState(state).status === "failed";
