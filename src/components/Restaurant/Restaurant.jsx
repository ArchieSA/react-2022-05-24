import React from 'react';
import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import { Rate } from '../Rate/Rate';
import { Reviews } from '../Reviews/Reviews';


const averageRate = ({restaurant}) => {
    let counter = 0;
    restaurant.reviews.map(item => { return counter += item.rating});
    return counter / restaurant.reviews.length;
}
export const Restaurant = ({ restaurant }) => {
    return (
        <div key={restaurant.id} className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu}/>
            <h3>Average review:</h3>
            <Rate rate={averageRate({restaurant})}/>
            <Reviews reviews={restaurant.reviews} id={restaurant.id}/>
        </div>
    );
}