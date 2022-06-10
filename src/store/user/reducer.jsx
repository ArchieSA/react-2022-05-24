import { normalizedUsers } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedUsers.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
    }, {}),
    ids: [normalizedUsers.map((user) => user.id)],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;