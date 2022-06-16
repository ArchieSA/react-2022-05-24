export const selectUserState = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;

export const selectIsLoading = (state) =>
  selectUserState(state).status === "loading";
export const selectIsFailed = (state) =>
  selectUserState(state).status === "failed";

export const selectUserIds = (state) => selectUserState(state).ids;