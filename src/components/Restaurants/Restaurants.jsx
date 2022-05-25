import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { RestaurantMenu } from "../Restaurant/RestaurantMenu";
import { RestaurantReview } from "../Restaurant/RestaurantReview";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} />
            </div>
            <div>
                <RestaurantMenu restaurantMenu="Борщ Баранина Рис Торт" />
            </div>
            <div>
                <RestaurantReview restaurantReview="всё Супер! Понравилась Баранина Торт - просто прелесть)" />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2" />
            </div>
            <div>
                <RestaurantMenu restaurantMenu="Харчо Плов Цезарь Сырники" />
            </div>
            <div>
                <RestaurantReview restaurantReview="Неплохо Сырники как у мамы:) Плов по-восточному очень понравился!" />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3" />
            </div>
            <div>
                <RestaurantMenu restaurantMenu="Щи Курица Яйца Блины" />
            </div>
            <div>
                <RestaurantReview restaurantReview="Блины со сметаной - очень вкусно! Хорошо Поели на славу" />
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4" />
            </div>
            <div>
                <RestaurantMenu restaurantMenu="Рассольник Мясо тушеное Картофель фри Пирог с черникой" />
            </div>
            <div>
                <RestaurantReview restaurantReview="вкусный пирог Рассольник - это классика! Удачно зашёл;)" />
            </div>
        </>
    );
}