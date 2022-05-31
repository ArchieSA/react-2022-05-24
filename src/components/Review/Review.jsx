import React from 'react';
import { Rate } from "../Rate/Rate";

export const Review = ({review}) => {
    return <>
        <div>{review.user}</div>
        <Rate rate={review.rating} />
        <div>{review.text}</div>
        <br />
    </>;
}