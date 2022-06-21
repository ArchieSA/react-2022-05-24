import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

export const MenuList = ({ products }) => {
  return (
    <div className={classnames(styles.layout)}>
      {products.map((product) => (
        <NavLink key={product.id} 
                 to={`/allmenu/${product.id}`}
                 className={classnames(styles.productLink)}>
            <div>
                {product.name}
            </div>
        </NavLink>
      ))}
    </div>
  );
};