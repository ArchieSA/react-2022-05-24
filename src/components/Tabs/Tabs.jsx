import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";
const date = (id) => id;
const dateLater = (label) => label;
export const Tabs = ({ tabs }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id }) => (
      <Tab key={id} label={label} id={id} className={styles.tab} date={date} dateLater={dateLater} />
    ))}
  </div>
);
