import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} feedbacks={['Все хорошо', 'Плохо', 'Печально']} menu={['Борщ', 'Чай', 'Щи', 'Молоко']}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2" feedbacks={['Не очень', 'Плохо', 'Пойдет']} menu={['Суши', 'Паста', 'Пицца', 'Торт']}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3" feedbacks={['Понравилось', 'Плохо', 'Так себе']} menu={['Макароны', 'Гречка', "Омлет", "Курица"]}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4" feedbacks={['Все хорошо', 'Плохо', 'Печально']} menu={['Котлета', 'Шашлык', 'Блины', 'Рис']}/>
            </div>
        </>
    );
}