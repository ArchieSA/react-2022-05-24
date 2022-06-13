export const selectUsersState = (state) => state.users;

export const selectUsersIds = (state) => selectUsersState(state).ids;

export const selectUserById = (state, id) =>
  selectUsersState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUsersState(state).entities[id]?.name;
