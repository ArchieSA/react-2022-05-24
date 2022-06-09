import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
  <header className={styles.root}>
      <img src={Logo} className={styles.logo} alt="logo" />
  </header>
)};
