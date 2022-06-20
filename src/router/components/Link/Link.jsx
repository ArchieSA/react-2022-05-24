import React from "react";

import styles from "./styles.module.css";
import classnames from "classnames";
import { usePushRoute } from "../../hooks/usePushRoute";

export const Link = ({ route, children, className }) => {
  const pushRoute = usePushRoute();

  const onClick = (event) => {
    event.preventDefault();

    pushRoute(route);
  };

  return (
    <a
      href={route}
      onClick={onClick}
      className={classnames(styles.root, className)}
    >
      {children}
    </a>
  );
};
