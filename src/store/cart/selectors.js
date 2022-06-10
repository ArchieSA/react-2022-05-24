export const selectCart = state => state.cart;
export const selectProduct = state => state.product.entities;

export const selectCartProductIds = state => Object.keys(selectCart(state));

export const selectProductCountFromCart = (state, productId) =>
  selectCart(state)[productId] || 0;
