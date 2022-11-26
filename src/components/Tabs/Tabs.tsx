import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

interface Interface {
  tabIds: (string | undefined)[];
  renderTab: (id?: string, className?: string) => JSX.Element;
  className?: {};
}

export const Tabs: React.FC<Interface> = ({ tabIds, renderTab, className }) => {
  return (
    <div className={classnames(styles.root)} style={className}>
      {tabIds.map((id) =>
        renderTab(
          id)
      )}
    </div>
  );
};
