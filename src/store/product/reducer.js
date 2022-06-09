import { normalizedProducts } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedProducts.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {}),
    ids: [normalizedProducts.map(({ id }) => id)],
};
// console.log(initialState)

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productReducer;
