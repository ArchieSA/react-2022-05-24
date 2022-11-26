import {ADD_PRODUCT, REMOVE_PRODUCT} from "../basket/actions";
import {BasketAction, BasketState} from "../../types/Basket";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


// const initialState: BasketState = {}
//
// export const basketSliceReducer = (state = initialState, action: BasketAction): BasketState => {
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return {...state, [action.payload]: (state[action.payload as keyof typeof state] || 0) + 1 };
//         case REMOVE_PRODUCT:
//             return {...state, [action.payload]: state[action.payload as keyof typeof state] ? Number(state[action.payload as keyof typeof state]) - 1 : 0 };
//         default:
//             return state;
//     }
// }


const initialState: BasketState = {}

export const basketSliceReducer = createSlice({
    name: "basket",
    initialState,
    reducers: {
        add: (state: BasketState, action: PayloadAction<string> ) => {
            state[action.payload as keyof typeof state] = (Number(state[action.payload as keyof typeof state]) || 0) + 1;

            return state;
        },
        remove: (state: BasketState, action: PayloadAction<string>) => {
            state[action.payload as keyof typeof state] = state[action.payload as keyof typeof state] ? Number(state[action.payload as keyof typeof state]) - 1 : 0;

            return state;
        },
    },
});