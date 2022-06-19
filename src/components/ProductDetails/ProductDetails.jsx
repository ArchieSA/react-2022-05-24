import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const ProductDetails = ({ product, className }) => {
  if (product === undefined)
    return null;

  return (
    <div className={classnames(styles.root, className)}>
      <div>id: {product.id}</div>
      <div>name: {product.name}</div>
      <div>price: {product.price}</div>
      <div>ingredients: {JSON.stringify(product.ingredients)}</div>
    </div>
  );
}
