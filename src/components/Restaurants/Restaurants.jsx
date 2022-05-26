import React from "react";
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
    const restaurantName = "CarambaRestaurant";
    return (
        <>
            <div>
                <Restaurant
                    restaurantName={restaurantName}
                    menuItems={["Суп1 🍲", "Салат 🥗", "Хлеб 🥖", "Компот 🥤"]}
                    reviewItems={["Все супер! 🤩🤩🤩", "Отличное место", "Придем еще 👍"]}
                />
            </div>
            <div>
                <Restaurant
                    restaurantName="restaurant 2"
                    menuItems={["Блины 🥞", "Борщ 🍲", "Кебаб 🥙", "Картофель фри 🍟"]}
                    reviewItems={["Приятное место", "Уютно", "Цены - супер"]}
                />
            </div>
            <div>
                <Restaurant
                    restaurantName="restaurant 3"
                    menuItems={[
                        "Клаб-сэндвич 🥪",
                        "Клубничный торт 🍰",
                        "Лобио 🍲",
                        "Люля-кебаб",
                    ]}
                    reviewItems={[
                        "Все понравилось!",
                        "Близко к метро",
                        "Вкусные десерты",
                    ]}
                />
            </div>
            <div>
                <Restaurant
                    restaurantName="restaurant 4"
                    menuItems={[
                        "Морковный суп 🍲",
                        "Овсяная каша 🥣",
                        "Пюре с зелёным луком 🥔",
                        "Пожарские котлеты 🍥",
                    ]}
                    reviewItems={[
                        "Вкусно, как дома",
                        "Вкусные завтраки",
                        "Быстрое обслуживание",
                    ]}
                />
            </div>
        </>
    );
};
