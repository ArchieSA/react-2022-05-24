export const selectUserState = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserState(state).entities[id];

export const selectUserNameById = (state, id) =>
  selectUserById(state, id)?.name;

export const selectUserIds = (state) => selectUserState(state)?.ids;