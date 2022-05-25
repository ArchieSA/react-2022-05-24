import React from 'react';

export const Restaurant = ({ restaurantName, restaurantMenu, restaurantReview }) => {
    return (

        <div>{restaurantName || 'unknown restaurant'}</div>

    );
}