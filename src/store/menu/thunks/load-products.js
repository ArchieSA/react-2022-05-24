import productSlice from "..";
import { selectIsAllRestauranProductsLoaded } from "../selectors";

export const loadProductsIfNotExist = (restaurantId) => (dispatch, getState) => {

    if (selectIsAllRestauranProductsLoaded(getState(), restaurantId)){
        return;
    }

    dispatch(productSlice.actions.loading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
    .then((response) => response.json())
    .then((prodcuts) => {
        dispatch(productSlice.actions.successfullyLoaded(prodcuts));
    })
    .catch(() => {
        dispatch(productSlice.actions.loadingFailed());
    });
};