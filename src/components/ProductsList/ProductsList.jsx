import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

export const ProductsList = ({ products, className }) => {
  return (
    <div className={styles.root}>
      {products.map((product) => (
        <NavLink
          key={product.id}
          to={`/product/${product.id}`}
          className={classnames(className, styles.productLink)}
        >
          {product.name}
        </NavLink>
      ))}
    </div>
  );
};
