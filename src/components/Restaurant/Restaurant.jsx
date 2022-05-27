import React from 'react';
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurantName, dishes, reviews }) => {
    return (
        <>
            <h2>{restaurantName || 'unknown restaurant'}</h2>
            <Menu dishes={dishes || []} />
            <Reviews reviews={reviews || []}/>
        </>
    );
}