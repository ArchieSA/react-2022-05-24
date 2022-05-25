import React from "react";
import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = () => {
  const restaurant_1 = {
    name: "CarambaRestaurant",
    menu: [
      {
        title: "Капуста кимчи",
      },
      {
        title: "Жареный тофу",
      },
      {
        title: "Курица карааге",
      },
      {
        title: "Тунец кацу",
      },
    ],
    reviews: [
      {
        description: "Вкусно",
      },
      {
        description: "Атмосферно",
      },
      {
        description: "Не понравилось",
      },
      {
        description: "Класс!",
      },
    ],
  };

  const restaurant_2 = {
    name: "restaurant 2",
    menu: [
      {
        title: "Макчикен Острый",
      },
      {
        title: "Цезарь Ролл с беконом",
      },
      {
        title: "Биг Тейсти Три Сыра",
      },
      {
        title: "Яичница с сыром",
      },
    ],
    reviews: [
      {
        description: "Чисто, уютно, хороший персонал",
      },
      {
        description: "вкусно, демократичные цены, есть бесплатная парковка",
      },
      {
        description:
          "Прекрасно поужинали и с удовольствием придём ещё. Брала лосось с брокколи и апельсином - топ).",
      },
      {
        description: "мясо супер",
      },
    ],
  };

  const restaurant_3 = {
    name: "restaurant 3",
    menu: [
      {
        title: "Блин Морской Богатырь",
      },
      {
        title: "Блин яблочно-карамельный ",
      },
      {
        title: "Окрошка Домашняя на квасе",
      },
      {
        title: "Блин фермерский",
      },
    ],
    reviews: [
      {
        description: "вкусно, не дорого, приятная атмосфера и обслуживане",
      },
      {
        description: "английская атмосфера европейское пиво уют",
      },
      {
        description:
          "приятная атмосфера. К сету в подарок идёт тапас на выбор. Цены не кусаются и ассортимент как по бару, так и по кухне хороший.",
      },
      {
        description:
          "Отмечала здесь​ 25 лет!​ Цены соответствуют.​ Народу много, но друг - другу никто не мешал. Была впервые - но точно не в последний раз. Рекомендую!",
      },
    ],
  };

  const restaurant_4 = {
    name: "restaurant 4",
    menu: [
      {
        title: "Донер c курицей",
      },
      {
        title: "Донер с говядиной",
      },
      {
        title: "Донер с курицей и картофелем фри",
      },
      {
        title: "Картофель фри c вешенками",
      },
    ],
    reviews: [
      {
        description:
          "Хорошее сочетание качественного алкоголя и вкусной, не заезженной кухни.",
      },
      {
        description:
          "Атмосферное место с вкусной барной картой и большим ассортиментом меню.",
      },
      {
        description: "Чуть грубоватая охрана",
      },
      {
        description: "Хорошее соотношение цены и качества!",
      },
    ],
  };

  return (
    <>
      <div>
        <Restaurant restaurantData={restaurant_1} />
      </div>
      <div>
        <Restaurant restaurantData={restaurant_2} />
      </div>
      <div>
        <Restaurant restaurantData={restaurant_3} />
      </div>
      <div>
        <Restaurant restaurantData={restaurant_4} />
      </div>
    </>
  );
};
