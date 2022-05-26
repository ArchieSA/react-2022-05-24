import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { Menu } from '../Menu/Menu';
import { Product } from '../Product/Product';
import { Reviews } from '../Reviews/Reviews';
import { Review } from '../Review/Review';

export const Restaurants = () => {
    const restaurantName = 'Ресторан 1';
    const reviewsName = 'Отзывы';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName}>
                    <Menu menuName="Азиатская кухня">
                        <Product productName="Традиционное мясо по-тайски, Том-ям, Лапша китайская, Жареный рис с креветками"/>
                    </Menu>
                    <Reviews reviewsName={reviewsName}>
                        <Review reviewText="Интересное сочетание. Точно закажу еще раз!"/>
                        <Review reviewText="Не понравилось"/>
                        <Review reviewText="Все супер! Расширяйте ассортимент"/>
                    </Reviews>
                </Restaurant>
            </div>
            <div>
                <Restaurant restaurantName="Ресторан 2">
                    <Menu menuName="Итальянская кухня">
                        <Product productName="Лазанья классическая, Брускетта с помидорами, Пицца Пеперрони, Паста Карбонара"/>
                    </Menu>
                    <Reviews reviewsName={reviewsName}>
                        <Review reviewText="Тесто для настоящей пиццы толстова-то"/>
                        <Review reviewText="Обожаю итальянскую кухню!"/>
                        <Review reviewText="Вкусная еда, адекватные цены"/>
                    </Reviews>
                </Restaurant>
            </div>
            <div>
                <Restaurant restaurantName="Ресторан 3">
                    <Menu menuName="Европейская кухня">
                        <Product productName="Салат Цезарь, Уха из сибаса, Паштет из куриной печени, Булочки с корицей Синнабон"/>
                    </Menu>
                    <Reviews reviewsName={reviewsName}>
                        <Review reviewText="Вкуснятина!"/>
                        <Review reviewText="Паштет - просто пальчики оближешь!!!"/>
                        <Review reviewText="Хочется больше блюд из мяса"/>
                    </Reviews>
                </Restaurant>
            </div>
            <div>
                <Restaurant restaurantName="Ресторан 4">
                    <Menu menuName="Американская кухня">
                        <Product productName="Бургер, Картофель Айдахо, Куриные наггетсы, Банановые панкейки"/>
                    </Menu>
                    <Reviews reviewsName={reviewsName}>
                        <Review reviewText="Бургеры - пища Богов"/>
                        <Review reviewText="Слишком маленькие порции за такие деньги!"/>
                        <Review reviewText="Очень вкусно! Я ваш навеки!!!"/>
                    </Reviews>
                </Restaurant>
            </div>
        </>
    );
}