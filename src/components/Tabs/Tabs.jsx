// import React from "react";
import TabContainer from "../../containers/Tab/Tab";
import styles from "./styles.module.css";

export const Tabs = ({ tabs, selectedId, onTabSelect }) => (
    <div className={styles.root}>
        {tabs.map((id) => (
            <TabContainer
                id={id}
                key={id}
                onTabSelect={() => onTabSelect(id)}
                isSelected={id === selectedId}
                className={styles.tab}
            />
        ))}
    </div>
);