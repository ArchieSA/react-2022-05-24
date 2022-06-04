import React from 'react';
import { Tab } from '../Tab/Tab';
import styles from './styles.module.css';

export const Tabs = ({names, onChangeTab}) => {
    return (
        <div className={styles.root}>
            {names.map((name, index) => 
                <Tab key={index} id={index} name={name} onClick={onChangeTab}/>
            )}
        </div>
    )
}