export const selectProductState = (state) => state.product;

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductState(state).entities[id]?.name;

export const selectIsProductsLoading = (state) =>
  selectProductState(state).status === "loading";
export const selectIsProductsFailed = (state) =>
  selectProductState(state).status === "failed";

export const selectProducts = (state) =>
  Object.values(selectProductState(state).entities);

export const selectProductIsLoaded = (state, productId) =>
  selectProductState(state).ids?.includes(productId);
