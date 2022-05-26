import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    
    const listProductsRestaurant1 = ['Стейк', 'Камбала', 'Мороженное', 'Чизбургер'];
    const listProductsRestaurant2 = ['Салат цезарь', 'Картошка фри', 'Сырные палочки', 'Рулетики из лосося'];
    const listProductsRestaurant3 = ['Арахис с беконом', 'Куриные крылья BBQ', 'Куриный суп', 'Уха'];
    const listProductsRestaurant4 = ['Оладья из кабачков', 'Буженина', 'Wok с говядиной и овощами', 'Спагетти'];
    
    const listCommentsRestaurant1 = ['Вкусно', 'Супер', 'Круто'];
    const listCommentsRestaurant2 = ['Вернусь!', 'Лучшая картошка фри', 'Было здорово'];
    const listCommentsRestaurant3 = ['Отлично', 'Шшшикарно', 'Классно'];
    const listCommentsRestaurant4 = ['Белиссемо', 'Превосходно', 'Лучшее, что я ел'];

    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName} 
                            listProducts = {listProductsRestaurant1}
                            listComments = {listCommentsRestaurant1}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2"
                            listProducts = {listProductsRestaurant2}
                            listComments = {listCommentsRestaurant2}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3"
                            listProducts = {listProductsRestaurant3}
                            listComments = {listCommentsRestaurant3}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"
                            listProducts = {listProductsRestaurant4}
                            listComments = {listCommentsRestaurant4}/>
            </div>
        </>
    );
}