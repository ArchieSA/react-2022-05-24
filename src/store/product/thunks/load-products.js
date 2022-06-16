import productSlice from "../index";
import { selectProductIds } from "../selectors";
import { selectRestaurantProductsIds } from "../../restaurant/selectors";


export function loadProductsIfNotExist(restaurantId) {

    return function(dispatch, getState) {
       
        const restauranProductsIds = selectRestaurantProductsIds(getState(), restaurantId);
        const loadedProductsIds = selectProductIds(getState());
        const missingProducts = restauranProductsIds.filter(
        (id) => !loadedProductsIds.includes(id)
        );

        if (missingProducts.length === 0) {
            console.log("Menu already loaded");
            return;
        }

        dispatch(productSlice.actions.startLoading());
        
        fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
        .then((responce) => responce.json())
        .then((products) => {
            dispatch(productSlice.actions.successLoading(products));
        })
        .catch(() => {
            dispatch(productSlice.actions.failLoading());
        })
    };
}

