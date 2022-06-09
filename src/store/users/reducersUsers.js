import {  normalizedUsers } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedUsers.reduce((acc, users) => {
        acc[users.id] = users;
        return acc;
    }, {}),
    ids: [normalizedUsers.map(({ id }) => id)],
};

console.log(initialState)

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;