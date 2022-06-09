import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const basketReducer = (state = {'Bread': 12}, action = {}) => {
    switch (action.type) {
        case ADD_PRODUCT:
          
            return{...state, [action.payload]: (state[action.payload] || 0) + 1}

        case REMOVE_PRODUCT:

            return{...state, [action.payload]: state[action.payload] ? state[action.payload] - 1 : 0}

        default: 
            return state;
    }
}

export default basketReducer;