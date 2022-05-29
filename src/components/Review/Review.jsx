import React from "react";

import style from './style.module.css';

import { Rate } from "../Rate/Rate";

export const Review = ({review: {user, text, rating}}) => {
    return (
        <div className={style.root}>
            <h3 className={style.title}>
                {user} 
                
                <Rate value={rating}/>
            </h3>

            <p className={style.text}>{text}</p>
        </div>
    );
}