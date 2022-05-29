import React, {useEffect, useState} from 'react';

import ThumbDown from './imgs/thumb-down.svg'
import ThumbUp from './imgs/thumb-up.svg'

import styles from './styles.module.css';

export const Product = ({product}) => {
    let [productCount, setProductCount] = useState(0);

    const down = () => {
        setProductCount(productCount - 1);
    };
    const up = () => {
        setProductCount(productCount + 1);
    };

    return (<div className={styles.root}>
        <span>{product.name}</span>
        <div className={styles.actions}>
            <button onClick={down} className={styles.action}>
                <img src={ThumbDown} className={styles.icon} loading="lazy"/>
            </button>
            <span className={styles.count}>{productCount}</span>
            <button onClick={up} className={styles.action}>
                <img src={ThumbUp} className={styles.icon} loading="lazy"/>
            </button>
        </div>
    </div>)
}