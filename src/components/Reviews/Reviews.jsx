import React from 'react';
import { Review } from '../Review/Review';

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h4>Reviews</h4>
            <ol>
                <li> {reviews[0]} </li>
                <li> {reviews[1]} </li>
                <li> {reviews[2]} </li>
            </ol>
        </div>
    );
}