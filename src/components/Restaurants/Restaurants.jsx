import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    const review1 = "Great fish and chips! We've stayed here in two countries around the world and had fish and chips both times and it didn't disappoint.";
    const review2 = "The cuisine is simple, traditional English. Large selection of beer and cider. Each room of the restaurant has its own special interior.";
    const review3 = "Food is great, lots of different beers, wines and mixed drinks.";

    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} />

                <u>Menu:</u>
                <ul>
                    <Menu menuName={"Onion Soup"}/>
                    <Menu menuName={"Schnitzel"}/>
                    <Menu menuName={"Fish and Chips"}/>
                    <Menu menuName={"Mashed Potatoes"}/>
                </ul>

                <u>Reviews:</u>
                <ul>
                    <Reviews review={review1}/>
                    <Reviews review={review2}/>
                    <Reviews review={review3}/>
                </ul>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2"/>

                <u>Menu:</u>
                <ul>
                    <Menu menuName={"Greek Salad"}/>
                    <Menu menuName={"Steak"}/>
                    <Menu menuName={"Spaghetti Bolognese"}/>
                    <Menu menuName={"Mashed Potatoes"}/>
                </ul>

                <u>Reviews:</u>
                <ul>
                    <Reviews review={review2}/>
                    <Reviews review={review1}/>
                    <Reviews review={review3}/>
                </ul>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3"/>

                <u>Menu:</u>
                <ul>
                    <Menu menuName={"Caprese Salad"}/>
                    <Menu menuName={"Cheeseburger"}/>
                    <Menu menuName={"Fish and Chips"}/>
                    <Menu menuName={"Lasagna"}/>
                </ul>

                <u>Reviews:</u>
                <ul>
                    <Reviews review={review3}/>
                    <Reviews review={review2}/>
                    <Reviews review={review1}/>
                </ul>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"/>

                <u>Menu:</u>
                <ul>
                    <Menu menuName={"Garlic Bread"}/>
                    <Menu menuName={"BBQ Ribs"}/>
                    <Menu menuName={"Pizza"}/>
                    <Menu menuName={"Wok Noodles"}/>
                </ul>

                <u>Reviews:</u>
                <ul>
                    <Reviews review={review2}/>
                    <Reviews review={review3}/>
                    <Reviews review={review1}/>
                </ul>
            </div>
        </>
    );
}