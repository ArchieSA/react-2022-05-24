import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import { Reviews } from '../Reviews/Reviews';
import { Rate } from "../Rate/Rate";

function getAverageRating(reviews) {
    let sum = 0;
    //const sum = reviews.reduce((total, reviews) => total + reviews.rating); 
    reviews.forEach( ({rating}) => {
        sum += rating;
    });
    return Math.round(sum/reviews.length)
}

export const Restaurant = ({ restaurant }) => {
    const avr = getAverageRating(restaurant.reviews)
    return (
        <div className={styles.root}>
            <Rate countStar={avr}/>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    );
}