import React from "react";
import TabContainer  from "../../containers/Tab/Tab";
import styles from "./styles.module.css";

const Tabs = ({ tabsIds }) => 
{
    return (
        <div className={styles.root}>
           {tabsIds.map(( id ) => (
                <TabContainer
                    key={id}
                    tabId={id}
                    className={styles.tab}
                />
            ))}
            
        </div>
    );
}


export default Tabs;