import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const data = [
        {
            restorant: 'CarambaRestaurant',
            dishes: ['Борщь', 'Окрошка', 'Салат крабовый', 'Компот'],
            reviews: ['CarambaRestaurant - Первый отзыв', 'CarambaRestaurant - Второй отзыв', 'CarambaRestaurant - Третий отзыв',]
        },
        {
            restorant: 'Лучший ресторан',
            dishes: ['Cолянка', 'Суп-харчо', 'Салат оливье', 'Чай'],
            reviews: ['Лучший ресторан - Первый отзыв', 'Лучший ресторан - Второй отзыв', 'Лучший ресторан - Третий отзыв',]
        },
        {
            restorant: 'Самый лучший ресторан',
            dishes: ['Рассольник', 'Кортошка по-деревенски', 'Салат с курицей', 'Кофе'],
            reviews: ['Самый лучший ресторан - Первый отзыв', 'Самый лучший ресторан - Второй отзыв', 'Самый лучший ресторан - Третий отзыв',]
        },
        {
            restorant: 'Вообще огонь какой ресторан',
            dishes: ['Суп куриный', 'Плов', 'Салат с капустой', 'Кисель'],
            reviews: ['Вообще огонь какой ресторан - Первый отзыв', 'Вообще огонь какой ресторан - Второй отзыв', 'Вообще огонь какой ресторан - Третий отзыв',]
        },
    ];

    return (
        <>
            <div>
                <Restaurant restaurantName={data[0].restorant} dishes={data[0].dishes} reviews={data[0].reviews} />
            </div>
            <br/>
            <div>
                <Restaurant restaurantName={data[1].restorant} dishes={data[1].dishes} reviews={data[1].reviews}/>
            </div>
            <br />
            <div>
                <Restaurant restaurantName={data[2].restorant} dishes={data[2].dishes} reviews={data[2].reviews}/>
            </div>
            <br />
            <div>
                <Restaurant restaurantName={data[3].restorant} dishes={data[3].dishes} reviews={data[3].reviews}/>
            </div>
            <br />
        </>
    );
}