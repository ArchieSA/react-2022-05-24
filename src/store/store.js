
import basketReducer from "./basket/reducer";
import Store from "./Store/Store";



const reducers = {
    basket: basketReducer,
}

export const store = new Store({ reducers });


