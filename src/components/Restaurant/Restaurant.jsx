import React from 'react';
import {Menu} from '../Menu/Menu'
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({restaurant}) => {
    return <>
            <h1>{restaurant.restaurantName}</h1>
            <Menu menuItems={restaurant.menuItems} />
            <Reviews messages={restaurant.reviewsMessages} />
        </>;
}