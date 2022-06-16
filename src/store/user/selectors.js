export const selectUserState = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;

export const selectUserByIds = (state) => {
  return selectUserState(state).ids;
};

export const selectIsLoading = (state) =>
  selectUserState(state).status === "loading";

export const selectIsFailed = (state) =>
  selectUserState(state).status === "failed";
