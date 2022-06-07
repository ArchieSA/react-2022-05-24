import React, {useContext, useEffect, useState} from 'react';
import classnames from "classnames";

import styles from './styles.module.css';
import {addProduct, removeProduct} from "../../store/basket/actions";
import useDispatch from "../../store/Store/hooks/useDispatch";
import useSelector from "../../store/Store/hooks/useSelector";
import {selectProductCountFromBasket} from "../../store/basket/selectors";

export const Product = ({name, className}) => {
    const dispatch = useDispatch();
    const productCount = useSelector((state) => selectProductCountFromBasket(state, name));

    return (<div className={classnames(styles.root, className)}>
        <span>{name}</span>
        <div className={styles.actions}>
            <button
                onClick={() => dispatch(removeProduct(name))}
                className={styles.action}
                disabled={productCount <= 0}
            >
                -
            </button>
            <div className={styles.count}>{productCount}</div>
            <button
                onClick={() => dispatch(addProduct(name))}
                className={styles.action}
                disabled={productCount >= 25}
            >
                +
            </button>
        </div>
    </div>)
}