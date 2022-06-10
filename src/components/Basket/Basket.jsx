import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

import BasketProductContainer from "../BasketProductContainer/BasketProductContainer";

const Basket = ({ className, productId }) => {
  // const selectedProducts = useSelector(selectBasket);
  // console.log(productId);
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {productId &&
        Object.keys(productId).map((productKey) =>
          BasketProductContainer(productKey, productId)
        )}
    </div>
  );
};

export default Basket;
