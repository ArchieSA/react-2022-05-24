import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { BasketProductContainer } from "../../containers/BasketProduct/BasketProduct"


export const Basket = ({ className, productIds }) => {

 const product =  productIds.map( (productId) => {
    return <BasketProductContainer key={productId} productId={productId}/>
 })

  return (
    <div className={classnames(styles.root, className)}>
      
      <h2>Basket</h2>
      <div  className={styles.product} >
        <div>{product}</div>
        </div>
    </div>
  );
};

