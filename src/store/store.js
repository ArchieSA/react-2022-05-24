import Store from "./Store/Store";
import basketReducer from "./basket/reducer";


const reducers = {
    basket: basketReducer,
};


export const store = new Store({reducers});