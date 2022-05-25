import React from 'react';

export const RestaurantReview = ({ restaurantReview }) => {
    return (
        <>
            <div>Отзывы о Ресторане:</div>
            <div>{restaurantReview || 'unknown review'}</div>
        </>
    );
}