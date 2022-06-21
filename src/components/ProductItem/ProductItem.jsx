import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const ProductItem = ({
  name,
  className,
  id
}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <NavLink to={`/products/${id}`}>
        More Info
    </NavLink>
    </div>
  );
};
