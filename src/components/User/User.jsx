import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export const User = ({ name, className }) => (
  <span className={classnames(styles.root, className)}>{name}</span>
);
