import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Product = ({
  name,
  productCount,
  removeProduct,
  addProduct,
  className,
  productId
}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <Link to={`/products/${productId}`} className={styles.productLink}>
        <span>{name}</span>
      </Link>
      <div className={styles.actions}>
        <button
          onClick={removeProduct}
          className={styles.action}
          disabled={productCount <= 0}
        >
          -
        </button>
        <div className={styles.count}>{productCount}</div>
        <button
          onClick={addProduct}
          className={styles.action}
          disabled={productCount >= 25}
        >
          +
        </button>
      </div>
    </div>
  );
};
