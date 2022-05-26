import React from 'react';
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurantName, menuItems, reviewItems }) => {
    return (
        <div>
            <b>{restaurantName || 'unknown restaurant'}</b>
            <Menu menuItems={menuItems || ['no menu items']}/>
            <Reviews reviewItems={reviewItems || ['no review items']}/>
        </div>
    );
}