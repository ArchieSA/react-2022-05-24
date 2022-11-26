import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { BasketItemContainer } from "../../containers/BasketItem/BasketItem";

type Props = {
    productIds: string[]
    // className: string
}
const Basket = (props: Props) => (
    <div className={classnames(styles.mainWrapper)}>
  <div className={classnames(styles.root)}>
    <h2 className={classnames(styles.title)}>Basket</h2>
    {props.productIds?.length > 0 &&
    props.productIds.map((productId) => (
        <BasketItemContainer
          key={productId}
          productId={productId}
          className={styles.product}
        />
      ))}
  </div>
    </div>
);

export default Basket;
