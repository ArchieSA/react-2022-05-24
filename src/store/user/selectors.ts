import { RootState } from "../store";

export const selectUserState = (state: RootState) => state.user;

export const selectUserIds = (state: RootState) => selectUserState(state).ids;

export const selectUserById = (state: RootState, id: string) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state: RootState, id: string) =>
  selectUserById(state, id)?.name;

export const selectIsUsersLoading = (state: RootState) =>
  selectUserState(state).status === "loading";
export const selectIsUsersFailed = (state: RootState) =>
  selectUserState(state).status === "failed";
