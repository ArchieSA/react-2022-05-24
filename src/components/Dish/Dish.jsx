import React from 'react';

export const Dish = ({ dishName }) => {
    return (
        <div>{dishName || 'unknown dish'}</div>
    );
}