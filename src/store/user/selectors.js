export const selectUserState = (state) => state.user;

export const selectUsersExist = (state) =>
  selectUserState(state).ids?.length > 0;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;

export const selectUserIsLoading = (state) =>
  selectUserState(state).status == "loading";

export const selectUserIsFailed = (state) =>
  selectUserState(state).status == "failed";
