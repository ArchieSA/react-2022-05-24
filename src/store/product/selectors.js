export const selectProductState = (state) => state.product;

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductState(state).entities[id]?.name;

export const selectProductIsLoading = (state) =>
  selectProductState(state).status == "loading";

export const selectProductIsFailed = (state) =>
  selectProductState(state).status == "failed";

export const selectProductsExistForRestaurant = (state, restaurantId) => {
  const restaurant = state.restaurant.entities[restaurantId];

  if (restaurant != undefined) {
    const productIds = restaurant.menu;
    return state.product.ids.includes(productIds[0]);
  }

  return false;
}
