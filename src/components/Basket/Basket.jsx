import React from 'react';
import styles from './styles.module.css';
import classnames from "classnames";
import useSelector from "../../store/Store/hooks/useSelector";
import {selectBasket} from "../../store/basket/selectors";

const Basket = ({className}) => {
    const selectedProducts = useSelector(selectBasket);

  return (
      <div className={classnames(styles.root, className)}>
          <h2>Basket</h2>
          {selectedProducts && Object.keys(selectedProducts).map((productKey) => (
              <div key={productKey} className={styles.product}>
                  <span>{productKey}</span>
                  <span>{selectedProducts[productKey]}</span>
              </div>
          ))}
      </div>
  );
}

export default Basket;