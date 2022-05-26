import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { Menu } from "../Restaurant/Menu";
import { Reviews } from "../Restaurant/Reviews"

export const Restaurants = () => {
    const restaurants = [
        {
            id: 1,
            restaurantName: 'restaurant 1',
            menu: ['блюдо1','блюдо2','блюдо3','блюдо4'],
            review: ['review1','review2','review3','review4'],
        },
        {
            id: 2,
            restaurantName: 'restaurant 2',
            menu: ['блюдо1','блюдо2','блюдо3','блюдо4'],
            review: ['review1','review2','review3','review4'],
        },
        {
            id: 3,
            restaurantName: 'restaurant 3',
            menu: ['блюдо1','блюдо2','блюдо3','блюдо4'],
            review: ['review1','review2','review3','review4'],
        }
    ]

    return <> {restaurants.map((restaurant) => <div key={restaurant.id}>
        <Restaurant restaurantName = {restaurant.restaurantName}/>
        <Menu menu = {restaurant.menu} />
        <Reviews review = {restaurant.review} />
        </div>)}

    </>;

}