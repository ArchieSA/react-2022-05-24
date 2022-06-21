import React from "react";
import ProductItemContainer from "../../containers/ProductItem/ProductItem";
import styles from './styles.module.css';

const ListAllProducts = ({productIds, className}) => (
    <div className={styles.root}>
        <h1 className={styles.menuTitle}>All Products</h1>
        {productIds?.map((productId) => (
           <ProductItemContainer
                key={productId}
                productId={productId}/>
        ))}
    </div>
)

export default React.memo(ListAllProducts);