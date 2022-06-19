import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logoLink}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>

      <Link to="/restaurants" className={styles.restaurantsLink}>
        Restaurants
      </Link>

      <Link to="/allProducts" className={styles.restaurantsLink}>
        All products
      </Link>

      <Link to="/basket" className={styles.basketLink}>
        Basket
      </Link>
    </header>
  );
};
