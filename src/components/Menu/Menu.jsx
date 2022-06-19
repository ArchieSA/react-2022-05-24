import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import ProductContainer from "../../containers/Product/Product";

const Menu = ({ productIds, className }) => (
  <div className={classnames(styles.root, className)}>
    {productIds?.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
);

export default React.memo(Menu);
