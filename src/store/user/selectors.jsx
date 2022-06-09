export const selectUserState = (state) => state.user;

export const selectUserIds = (state) => selectUserState(state).Ids;
export const selectUserById = (state, id) => selectUserState(state)[id];