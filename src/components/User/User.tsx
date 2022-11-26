import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

interface Interface {
     name: string, className: string
}
export const User = ({ name, className }: Interface) => (
  <span className={classnames(styles.root, className)}>{name}</span>
);
