import React from 'react';

export const RestaurantMenu = ({ restaurantMenu }) => {
    return (
        <>
            <div>Меню Ресторана:</div>
            <div>{restaurantMenu || 'unknown menu'}</div>
        </>
    );
}