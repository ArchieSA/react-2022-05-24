import { selectRestaurantById } from "../restaurant/selectors";

export const selectProductState = (state) => state.product;

export const selectIsAllRestauranProductsLoaded = (state, restaurantId) => {
    const restaurantProductsIds = selectRestaurantById(state, restaurantId)?.menu;
    const loadedProducts = selectProductState(state).ids;
    return restaurantProductsIds?.every((id) => loadedProducts.includes(id));
  };

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) => selectProductState(state).entities[id];
export const selectProductNameById = (state, id) => selectProductState(state).entities[id]?.name;
