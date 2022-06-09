import { normalizedUsers } from "../../constants/normalized-fixtures";

const intitialState = {
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc
    }, {}),
    ids: [normalizedUsers.map(({id}) => id)],
}

const userReducer = (state = intitialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer;