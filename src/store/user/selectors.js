export const selectUserState = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;
