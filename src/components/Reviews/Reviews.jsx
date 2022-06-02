import React from 'react';
import Review, { Rate } from '../Rate/Rate';

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews:</h3>

            {
                reviews.map((review) => {
                    return (
                        <div key={review.id}>
                            <span>{review.user}: </span>
                            <span>{review.text}</span>
                            <Rate value={review.rating} />
                        </div>
                    );
                })
            }

        </div>
    );
}