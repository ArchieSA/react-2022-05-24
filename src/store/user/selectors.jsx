export const selectUserState = (state) => state.user;

export const selectUserIds = (state) => selectUserState(state).Ids;
export const selectUserNameById = (state, id) => {
    return selectUserState(state).entities[id]?.name;
}