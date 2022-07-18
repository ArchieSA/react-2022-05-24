import React from "react";
import styles from "./styles.module.css";

export const Tabs = ({
  tabIds,
  activeTabIndex,
  onClick,
  renderTab,
  className,
}) => {
  return (
    <div>
      {tabIds.map(({ id, index }) =>
        renderTab({
          id,
          onClick: () => onClick(index),
          isActive: index === activeTabIndex,
          // className: style.tab,
        })
      )}
    </div>
  );
};
