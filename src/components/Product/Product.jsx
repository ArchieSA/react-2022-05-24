import React, { useState} from 'react';
import classnames from "classnames";

import styles from './styles.module.css';

export const Product = ({name, className}) => {
    let [count, setCount] = useState(0);

    return (<div className={classnames(styles.root, className)}>
        <span>{name}</span>
        <div className={styles.actions}>
            <button
                onClick={() => setCount(count - 1)}
                className={styles.action}
                disabled={count <= 0}
            >
                -
            </button>
            <div className={styles.count}>{count}</div>
            <button
                onClick={() => setCount(count + 1)}
                className={styles.action}
                disabled={count >= 25}
            >
                +
            </button>
        </div>
    </div>)
}