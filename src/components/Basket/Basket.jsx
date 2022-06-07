import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { selectBasket } from "../../store/basket/selectors";
import { useSelector } from "react-redux";

const Basket = ({ className }) => {
  const selectedProducts = useSelector(selectBasket);

  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {selectedProducts &&
        Object.keys(selectedProducts).map((productKey) => (
          <div key={productKey} className={styles.product}>
            <span>{productKey}</span>
            <span>{selectedProducts[productKey]}</span>
          </div>
        ))}
    </div>
  );
};

export default Basket;
