import React from 'react';
import {Restaurant} from "../Restaurant/Restaurant";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews"

export const Restaurants = () => {
    const restaurantName = 'CarambaRestaurant';
    return (
        <>
            <div>
                <Restaurant restaurantName={restaurantName}/>
                <Menu menuItems={[
                    {
                        "name": "Суп 🍲"
                    },
                    {
                        "name": "Салат 🥗"
                    },
                    {
                        "name": "Хлеб 🥖"
                    },
                    {
                        "name": "Компот 🥤"
                    }
                ]}/>
                <Reviews reviewItem={[
                    {
                        "text": "Все супер! 🤩🤩🤩"
                    },
                    {
                        "text": "Отличное место"
                    },
                    {
                        "text": "Придем еще 👍"
                    }
                ]}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 2"/>
                <Menu menuItems={[
                    {
                        "name": "Блины 🥞"
                    },
                    {
                        "name": "Борщ 🍲"
                    },
                    {
                        "name": "Кебаб 🥙"
                    },
                    {
                        "name": "Картофель фри 🍟"
                    }
                ]}/>
                <Reviews reviewItem={[{
                    "text": "Приятное место"
                },
                    {
                        "text": "Уютно"
                    },
                    {
                        "text": "Цены - супер"
                    }]}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 3"/>
                <Menu menuItems={[
                    {
                        "name": "Клаб-сэндвич 🥪"
                    },
                    {
                        "name": "Клубничный торт 🍰"
                    },
                    {
                        "name": "Лобио 🍲"
                    },
                    {
                        "name": "Люля-кебаб"
                    }
                ]}/>
                <Reviews reviewItem={[
                    {
                        "text": "Все понравилось!"
                    },
                    {
                        "text": "Близко к метро"
                    },
                    {
                        "text": "Вкусные десерты"
                    }
                ]}/>
            </div>
            <div>
                <Restaurant restaurantName="restaurant 4"/>
                <Menu menuItems={[
                    {
                        "name": "Морковный суп 🍲"
                    },
                    {
                        "name": "Овсяная каша 🥣"
                    },
                    {
                        "name": "Пюре с зелёным луком 🥔"
                    },
                    {
                        "name": "Пожарские котлеты 🍥"
                    }
                ]}/>
                <Reviews reviewItem={[
                    {
                        "text": "Вкусно, как дома"
                    },
                    {
                        "text": "Вкусные завтраки"
                    },
                    {
                        "text": "Быстрое обслуживание"
                    }
                ]}/>
            </div>
        </>
    );
}