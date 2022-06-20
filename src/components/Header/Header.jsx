import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logoLink}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
      <Link to="/menu" className={styles.headerLink}>
        Menu
      </Link>
      <Link to="/restaurants" className={styles.headerLink}>
        Restaurants
      </Link>
      <Link to="/basket" className={styles.headerLink}>
        Basket
      </Link>
    </header>
  );
};
