import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabs, selectedId, onTabSelect }) => (
    <div className={styles.root}>
        {tabs.map(({ label, id }) => (
            <Tab
                key={id}
                label={label}
                onTabSelect={() => onTabSelect(id)}
                isSelected={id === selectedId}
                className={styles.tab}
            />
        ))}
    </div>
);