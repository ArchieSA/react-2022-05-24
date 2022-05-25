import React from 'react';
import { Feedbacks } from '../Feedbacks/Feedbacks';
import { Menu } from '../Menu/Menu';

export const Restaurant = ({ restaurantName, feedbacks, menu }) => {
    return (
        <>
            <h2>{restaurantName || 'unknown restaurant'}</h2>
            <Feedbacks feedbacks={feedbacks || ['no feedbacks']}/>
            <Menu menu={menu || ['no menu']}/>
        </>
    );
}