import React from 'react';

export const Restaurant = (props) => {
    return (
        <div>{props.restaurantName || 'unknown restaurant'}</div>
    );
}