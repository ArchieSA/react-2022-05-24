import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import BasketItem from "../BasketItem/BasketItem";
import BasketItemContainer from "../../containers/BasketItem/BasketItem";

const Basket = ({ className, productIds }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h2>Basket</h2>

      {productIds?.map(productId => 
        <BasketItemContainer key={productId} productId={productId} /> 
      )}
    </div>
  );
};

export default Basket;
