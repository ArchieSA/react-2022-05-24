import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

export const Products = ({
  name,
                           productId,
  className,
}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>

      </div>
    </div>
  );
};
