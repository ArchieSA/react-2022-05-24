import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { selectBasket } from "../../store/basket/selectors";
import { useSelector } from "react-redux";
import CartItem from "../../containers/CartItem/CartItem";

const Basket = ({ className }) => {
  const selectedProducts = useSelector(selectBasket);

  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {selectedProducts &&
        Object.keys(selectedProducts).map((productKey) => (
          <CartItem className={styles.product} productId={productKey} selectedProducts={selectedProducts[productKey]}/>
        ))}
    </div>
  );
};

export default Basket;
