import React from "react";
import styles from "./styles.module.css";
// import classnames from "classnames";

export const MenuDetail = ({ product}) => {
  if (product === undefined) return null;
  return (
    <ul className={styles.root}>
      <li><span className={styles.lable}>Id:</span> {product.id}</li>
      <li><span className={styles.lable}>Name:</span> {product.name}</li>
      <li><span className={styles.lable}>Price:</span> {product.price}</li>
      <li><span className={styles.lable}>Ingredients:</span> {product.ingredients.join(", ")}</li>
    </ul>
  );
};