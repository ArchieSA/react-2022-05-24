import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";


export const BasketProduct = ( { productName, productCount} ) => {
    return (
        <div>
            <span>{productName}</span>
            <span>{productCount}</span>
        </div>
    );
};

