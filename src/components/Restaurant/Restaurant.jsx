import React from 'react';

export const Restaurant = ({ restaurantName }) => {
    return (
        <div>
            <div>{restaurantName || 'unknown restaurant'}</div>
        </div>
    );
}