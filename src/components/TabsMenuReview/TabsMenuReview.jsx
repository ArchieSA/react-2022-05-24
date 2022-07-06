import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";
import { TabMenuReview } from "../TabMenuReview/TabMenuReview";

export const TabsMenuReview = ({ tabs }) => (
  <div className={styles.root}>
    {tabs.map(({ label, restaurantId }, key) => (
      <TabMenuReview
        key={key}
        label={label}
        id={restaurantId}
        className={styles.tab}
      />
    ))}
  </div>
);
