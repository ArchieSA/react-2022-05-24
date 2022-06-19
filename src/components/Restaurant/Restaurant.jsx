import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>

      <div className={styles.tabs}>
        <NavLink to={`/restaurants/${restaurant.id}/menu`} className={
          ({ isActive }) => classNames(styles.button, { [styles.selected]: isActive })}>

          Menu
        </NavLink>
        <NavLink to={`/restaurants/${restaurant.id}/reviews`} className={
          ({ isActive }) => classNames(styles.button, { [styles.selected]: isActive })}>

          Reviews
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};
