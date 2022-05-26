import React from 'react';

export const Reviews = ({ review }) => {
    const reviews = review.map((item) =>
        <div>{item}</div>
    ); 
    return <>{reviews}</>
}