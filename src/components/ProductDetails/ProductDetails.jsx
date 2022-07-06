import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export const ProductDetails = ({ name, price, ingredients, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={classnames(styles.ingredient)}>{name}</div>
      <div className={classnames(styles.ingredient)}>price: {price}</div>
      <ul className={classnames(styles.ingredient)} style={{ paddingLeft: 40 }}>
        {(ingredients || []).map((id, key) => (
          <li key={id}>
            ingredient {key + 1}: {id}
          </li>
        ))}
      </ul>
    </div>
  );
};
