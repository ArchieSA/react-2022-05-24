import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import CartProduct from "../../containers/CartProduct/CartProduct";

const Cart = ({ selectedProductIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Cart</h2>
      {selectedProductIds &&
        selectedProductIds.map((productId) => (
          // <div key={productKey} className={styles.product}>
          //   <span>{productKey}</span>
          //   <span>{selectedProducts[productKey]}</span>
          // </div>
          <CartProduct
            key={productId}
            selectedProductId={productId}
            className={styles.product}
          />
        ))}
    </div>
  );
};

export default Cart;
