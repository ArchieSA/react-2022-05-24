export const selectProductState = state => state.product;

export const selectProductIds = state => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductById(state, id)?.name;

export const selectIsProductsLoading = state =>
  selectProductState(state).status === 'loading';
export const selectIsProductsFailed = state =>
  selectProductState(state).status === 'failed';
