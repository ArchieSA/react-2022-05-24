import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const ProductDetail = ({ product, className }) => {
  if (product === undefined) return null;
  return (
    <ul className={classnames(styles.root, className)}>
      <li>Id: {product.id}</li>
      <li>Name: {product.name}</li>
      <li>Price: {product.price}</li>
      <li>Ingredients: {product.ingredients.join(", ")}</li>
    </ul>
  );
};
