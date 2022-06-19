import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

export const AllProducts = ({ products, className }) => (
  products.map(p =>
    <div key={p.id} className={classnames(styles.root, className)}>
      <NavLink to={`/product/${p.id}`} className={styles.productLink}>
        {p.name}
      </NavLink>
    </div>
  )
);
