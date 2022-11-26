import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

type Props = {
    productName: string
    productCount: number
    className: string
}

export const BasketItem = (props: Props) => (
  <div className={classnames(styles.root, props.className)}>
    <span>{props.productName}</span>
    <span>{props.productCount}</span>
  </div>
);
