import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const BasketItem = ({ productName, productCount, className }) => (
  <div className={classnames(styles.root, className)}>
    <span>{productName}</span>
    <span>{productCount}</span>
  </div>
);
