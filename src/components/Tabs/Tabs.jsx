import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabs }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id }) => (
      <Tab key={id} label={label} id={id} className={styles.tab} />
    ))}
  </div>
);
