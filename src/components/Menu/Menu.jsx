import React from 'react';
import { Dish } from '../Dish/Dish';

export const Menu = ({ dishes }) => {
    return (
        <div>
            <h4>Menu</h4>
            <ol>
                <li>
                    <Dish dishName={dishes[0]} />
                </li>
                <li>
                    <Dish dishName={dishes[1]} />
                </li>
                <li>
                    <Dish dishName={dishes[2]} />
                </li>
                <li>
                    <Dish dishName={dishes[3]} />
                </li>
            </ol>
        </div>
    );
}