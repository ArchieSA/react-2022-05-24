import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurants = 
    [
        {
            restaurantName : "Galvin Bistrot de Luxe Restaurant",
            menuItems : ["Cabbage", "Potatoes", "Bread", "Kvass"],
            reviewsMessages : ["Very nice and tasty", "Not bad", "👍"],
        },
        {
            restaurantName : "Osteria Francescana Restaurant",
            menuItems : ["Bread", "Potatoes", "Kvass", "Cabbage"],
            reviewsMessages : ["Not bad", "👍", "Very nice and tasty"],
        }
    ];

    return <div>
            {restaurants.map(
                (rest, i) => <Restaurant key={i} restaurant={rest} />
            )}
        </div>;
}