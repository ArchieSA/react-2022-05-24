import React from 'react';

import styles from'./styles.module.css';
import {Rate} from "../Rate/Rate";
import StarGold from "../Rate/imgs/star-gold.svg";


export const Reviews = ({reviews}) => {
    // text: "Not bad"
    // user: "Antony"
    return (
        <div className={styles.root}>
            <div className={styles.actions}>
                {reviews.map((e, i) => <div key={i}>{e.user}: {e.text}: <Rate rate={e.rating} /></div>)}
            </div>

        </div>
    )
}