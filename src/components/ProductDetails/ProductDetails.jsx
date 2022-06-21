import React from "react";
import classnames from "classnames";
import List from "../List/List";

import styles from "./styles.module.css";

export const ProductDetails = ({
  name,
  className,
  id,
  product,
  ingredinets,
  productPrice,
}) => {
    console.log('aaas');
  return (
    <div className={classnames(styles.root, className)}>
      <h2>{name}</h2>
      <p>Price: {productPrice}</p>
      <List items={ingredinets} label={'Ingredients'}/>
      
    </div>
  );
};
