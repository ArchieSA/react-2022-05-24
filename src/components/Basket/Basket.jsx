import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import BasketProduct from "../../containers/BasketProduct/BasketProduct";

const Basket = ({ selectedProducts, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {selectedProducts &&
        Object.keys(selectedProducts).map((productKey) => (
          <BasketProduct
            key={productKey}
            selectedProductId={productKey}
            className={styles.product}
          />
        ))}
    </div>
  );
};

export default Basket;
