import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import BasketProductContainer from "../../containers/BasketProduct/BasketProduct";

const Basket = ({ productIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={classnames(styles.header)}>Корзина</h2>
      {
        productIds && productIds.map((productKey) => (
          <BasketProductContainer productId={productKey} />
        ))
      }
    </div>
  );
};

export default Basket;
