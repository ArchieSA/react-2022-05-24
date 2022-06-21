export const selectProductState = (state) => state.product;

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductState(state).entities[id]?.name;

export const selectProductPriceById = (state, id) =>
selectProductState(state).entities[id]?.price;

export const selectProductProductIngredientsById = (state, id) =>
selectProductState(state).entities[id]?.ingredients;

export const selectIsProductsLoading = (state) =>
  selectProductState(state).status === "loading";
export const selectIsProductsFailed = (state) =>
  selectProductState(state).status === "failed";
