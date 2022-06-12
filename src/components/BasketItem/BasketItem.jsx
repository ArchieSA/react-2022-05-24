import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const BasketItem = ({ className, productName, productCount }) => {

  if (productCount == 0)
  {
    return null;
  }

  return (
    <div className={classNames(className, styles.product)}>
      <span>{productName}</span>
      <span>{productCount}</span>
    </div>
  );
};

export default BasketItem;
