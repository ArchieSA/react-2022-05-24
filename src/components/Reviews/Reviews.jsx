import React from 'react';

export const Reviews = ({ reviewsName, children }) => {
    return (
        <div>{reviewsName}{children}</div>
    );
}