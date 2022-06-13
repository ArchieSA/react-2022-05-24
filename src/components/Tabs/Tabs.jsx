import React from "react";
import TabContainer from "../../containers/Tab/Tab"

import styles from "./styles.module.css";

export const Tabs = ({ restaurantIds, selectedId, onTabSelect }) => (
    <div className={styles.root}>
        {restaurantIds.map((id) => (
            <TabContainer
                key={id}
                restaurantId={id}
                onTabSelect={() => onTabSelect(id)}
                isSelected={id === selectedId}
                className={styles.tab}
            />
        ))}
    </div>
);