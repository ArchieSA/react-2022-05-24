import productSlice from "../index";
import { selectProductIds } from "../selectors";


export function loadProductsIfNotExist(restaurantId) {

    return function(dispatch, getState) {
       
        console.log('prId: ', getState()); 

        // if (selectProductIds(getState())?.length > 0) {
        //     console.log("already loaded");
      
        //     return;
        //   }

        dispatch(productSlice.actions.startLoading());
        
        fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
        .then((responce) => responce.json())
        .then((products) => {
            console.log('fetch prs: ', products);
            dispatch(productSlice.actions.successLoading(products));
        })
        .catch(() => {
            console.log('Error');
            dispatch(productSlice.actions.failLoading());
        })
    };
}

