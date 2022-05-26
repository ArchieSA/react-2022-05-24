import React from 'react';

export const Restaurant = ({ restaurantName }) => {
    return (
        <div><b>{restaurantName || 'unknown restaurant'}</b></div>
    );
}