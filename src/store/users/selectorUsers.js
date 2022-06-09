export const selectUsersState = (state) => state.users;

export const selectUsersIds = (state) => selectUsersState(state).ids;

export const selectUsersById = (state, id) =>
    selectUsersState(state).entities[id];

export const selectUsersNameById = (state, id) =>
    selectUsersState(state).entities[id]?.name;