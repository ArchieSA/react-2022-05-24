import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";
import { normalizedProducts } from "../../constants/normalized-fixtures";

const initialState = {
    ids: normalizedProducts.map(({id}) => id),
    entities: normalizedProducts.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {})
}

const basketReducer = (state = initialState, action) => {
    const entity = state.entities[action.payload];

    switch (action?.type) {
        case ADD_PRODUCT:
            entity.count = (entity?.count || 0) + 1;
            return { ...state };
        case REMOVE_PRODUCT:
            entity.count = (entity?.count || 0) - 1;
            return { ...state };
        default:
            return state;
    }
}

export default basketReducer;