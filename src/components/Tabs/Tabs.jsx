import React, { useState } from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/restaurant/selectors";
import TabContainer from "../../containers/Tab/Tab";

// export const Tabs = ({ tabs, selectedId, onTabSelect }) => (
//     <div className={styles.root}>
//         {tabs.map(({ label, id }) => (
//             <Tab
//                 key={id}
//                 label={label}
//                 onTabSelect={() => onTabSelect(id)}
//                 isSelected={id === selectedId}
//                 className={styles.tab}
//             />
//         ))}
//     </div>
// );

export const Tabs = ( {restaurantIds, restaurantId, onTabSelect} ) => {

  return (
    <div className={styles.root}>
      {restaurantIds.map((id, key) => (

        <TabContainer
            key={key}
          restaurantId={id}
          isSelected={restaurantId}
          onTabSelect={onTabSelect}
        />
      ))}
    </div>
  );
};
