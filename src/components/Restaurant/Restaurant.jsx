import React from 'react';

export const Restaurant = ({ restaurantName, children }) => {
    return (
        <div>{restaurantName || 'unknown restaurant'}{children}</div>
    );
}