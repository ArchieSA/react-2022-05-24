import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Tabs = ({
  tabIds,
  renderTab,
  className,
}) => {
  return (
    <div className = {classnames(styles.root)} style={className}>
      {tabIds.map(( id ) =>
        renderTab({
          id
        })
      )}
    </div>
  );
};
