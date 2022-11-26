import { selectProductIds } from "../selectors";
import productSlice from "../index";
import { selectRestaurantProductsById } from "../../restaurant/selectors";
import { useAppDispatch } from "../../../hooks/hook_ts";
import { RootState } from "../../store";
import { Dispatch } from "redux";

export function loadProductsIfNotExist(restaurantId: string | undefined) {
  return function (dispatch: Dispatch, getState: () => RootState) {
    // const dispatch = useAppDispatch();
    const productIds = selectProductIds(getState());
    const restaurantProducts = selectRestaurantProductsById(getState(), {
      restaurantId,
    });

    if (
      restaurantProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/products?${new URLSearchParams(
        restaurantId
      ).toString()}`
    )
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
