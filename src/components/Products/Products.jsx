import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";

export const Products = ({ productId, className }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  return (
    <div className={classnames(styles.root, className)}>
      <span>{productName}</span>
      <div className={styles.actions}></div>
    </div>
  );
};
