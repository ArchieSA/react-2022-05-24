import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

type ProductDetailsProps = {
    name: string,
    price: number,
    ingredients: string[]
}
export const ProductDetails: React.FC<ProductDetailsProps> = ({ name, price, ingredients }) => {
  return (
      <div className={styles.mainWrapper}>
    <div className={classnames(styles.root)}>
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
      </div>
  );
};
