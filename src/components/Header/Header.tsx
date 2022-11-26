import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logoLink}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
        <Link to="/products" className={styles.restaurantsLink}>
            Products
        </Link>
      <Link to="/restaurants" className={styles.restaurantsLink}>
        Restaurants
      </Link>
      <Link to="/basket" className={styles.basketLink}>
        Basket
      </Link>
    </header>
  );
};
