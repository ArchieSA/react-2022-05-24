import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

import BasketProductContainer from "../BasketProductContainer/BasketProductContainer";

const Basket = ({ className, productIds }) => {
  // const selectedProducts = useSelector(selectBasket);
  // console.log(productId);
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Basket</h2>
      {/*{productId &&*/}
      {/*  Object.keys(productId).map((productKey) =>*/}
      {/*    BasketProductContainer(productKey, productId)*/}
      {/*  )}*/}

        {
            productIds.length > 0 && productIds.map(
                (productId) =>
                    <div>{productId}
                        <BasketProductContainer productId={productId}/>
                    </div>
            )
        }
    </div>
  );
};

export default Basket;
