export const selectUserState = (state) => state.user;

export const selectUserIds = (state) => selectUserState(state).ids;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;

export const selectIsUsersLoading = (state) =>
  selectUserState(state).status === "loading";
export const selectIsUsersFailed = (state) =>
  selectUserState(state).status === "failed";
