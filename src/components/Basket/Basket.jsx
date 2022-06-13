import React from "react";
import BasketProductContainer from "../../containers/BasketProduct/BasketProduct";
import styles from "./styles.module.css";
import classnames from "classnames";

const Basket = ({ className, productsID }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {productsID &&
        productsID.map((id) => (
          <BasketProductContainer key={id} className={styles.product} id={id}>
          </BasketProductContainer>
        ))}
    </div>
  );
};

export default Basket;
