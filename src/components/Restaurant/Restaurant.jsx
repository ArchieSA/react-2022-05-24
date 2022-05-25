import React from "react";

export const Restaurant = ({ restaurantData }) => {
  const { name, menu, reviews } = restaurantData;

  return (
    <>
      <p>{name || "unknown restaurant"}</p>

      <div className="menu">
        Меню:
        <hr />
        {menu.map(({ title }) => {
          return <p key={title}>{title}</p>;
        })}
      </div>

      <div className="review">
        Отзывы:
        <hr />
        {reviews.map(({ description }) => {
          return <p key={description}>{description}</p>;
        })}
      </div>
      <hr />
    </>
  );
};
