export const selectUserState = (state) => state.user;

//export const selectUserIds = (state) => selectUserState(state).ids;
export const selectUserById = (state, id) =>
   selectUserState(state).entities[id];

