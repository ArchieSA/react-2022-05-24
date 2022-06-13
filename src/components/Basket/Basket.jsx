import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import CartItem from "../../containers/CartItem/CartItem";

const Basket = ({ className, selectedProducts }) => {
  
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {selectedProducts.map((productId) => (
         <CartItem key={productId} className={styles.product} productId={productId} />
        ))}
    </div>
  );
};

export default Basket;
