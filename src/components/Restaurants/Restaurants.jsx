import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"/>
            </div>
        </>
    );
}