import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { BasketItemContainer } from "../../containers/BasketItem/BasketItem";

const Basket = ({ productIds, className }) => (
  <div className={classnames(styles.root, className)}>
    <h2>Basket</h2>
    {productIds?.length > 0 &&
      productIds.map((productId) => (
        <BasketItemContainer
          key={productId}
          productId={productId}
          className={styles.product}
        />
      ))}
  </div>
);

export default Basket;
