import React from "react";
import styles from "./styles.module.css"

export const Tab = ({id, name, onClick}) => {
    return (
        <div className={styles.root} onClick={_ => onClick(id)}>
            {name}
        </div>
    );
}