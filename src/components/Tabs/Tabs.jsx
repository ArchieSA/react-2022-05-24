import React from "react";

import styles from "./styles.module.css";
import TabsContainer from "../../containers/Tabs/Tabs";

export const Tabs = ({ restaurantIds, selectedId, onTabSelect }) => (
  <div className={styles.root}>
    {restaurantIds.map((id) => (
      <TabsContainer
        key={id}
        restaurantId={id}
        onTabSelect={() => onTabSelect(id)}
        isSelected={id === selectedId}
        className={styles.tab}
      />
    ))}
  </div>
);
