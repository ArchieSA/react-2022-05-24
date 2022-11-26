import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import ProductContainer from "../../containers/Product/Product";

interface MenuInterface {
  productIds: string[];
}
const Menu: React.FC<MenuInterface> = ({ productIds }) => (
    <div className={classnames(styles.mainWrapper)}>
  <div className={classnames(styles.root)}>
    <span className={styles.menuTitle}>Menu</span>
    {productIds?.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
    </div>
);

export default React.memo(Menu);
