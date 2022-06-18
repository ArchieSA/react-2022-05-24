import productSlice from "../index";
import { selectProductsExistForRestaurant, selectProductIsLoading } from "../selectors";

function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {

    if (selectProductIsLoading(getState()))
    {
      console.log("products already loading");
      return;
    }

    // Проверяем наличие ревью конкретного ресторана
    if (selectProductsExistForRestaurant(getState(), restaurantId))
    {
      console.log("products already loaded");
      return;
    }

    dispatch(productSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((products) => {

        // Передаем текущий стейт для агрегации данных
        dispatch(productSlice.actions.successLoading({
          productsState: getState().product,
          productsData: products
        }));

      })
      .catch(() => {
        dispatch(productSlice.actions.failLoading());
      });
  };
}

export default loadProductsIfNotExist;
