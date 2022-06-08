export const selectCart = (state) => state.cart;
export const selectProduct = (state) => state.product.entities;

export const selectProductCountFromCart = (state, productId) =>
  selectCart(state)[productId] || 0;
