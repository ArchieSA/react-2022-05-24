import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { selectBasket, selectProductCountFromBasket } from "../../store/basket/selectors";
import { useSelector } from "react-redux";

const Basket = ({productIds, className }) => {
  // const selectedProducts = useSelector(selectBasket);
// console.log(selectedProducts)

  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {productIds &&
        Object.keys(productIds).map((productKey) => (
          <div key={productKey} className={styles.product}>
            <span>{productKey}</span>
            <span>{productIds[productKey]}</span>
          </div>
        ))}
    </div>
  );
};

export default Basket;
