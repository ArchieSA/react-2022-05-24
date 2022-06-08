import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import CartProduct from "../../containers/CartProduct/CartProduct";

const Cart = ({ selectedProducts, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Cart</h2>
      {selectedProducts &&
        Object.keys(selectedProducts).map((productKey) => (
          // <div key={productKey} className={styles.product}>
          //   <span>{productKey}</span>
          //   <span>{selectedProducts[productKey]}</span>
          // </div>
          <CartProduct
            key={productKey}
            selectedProductId={productKey}
            className={styles.product}
          />
        ))}
    </div>
  );
};

export default Cart;
