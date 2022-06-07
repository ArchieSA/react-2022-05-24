import Logo from "./img/logo.svg";
import styles from "./styles.module.css";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext";
import {THEMES} from "../../constants/theme";

export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const switchTheme = () => {
        if (theme === THEMES.Dark) {
            setTheme(THEMES.Light);
        }

        if (theme === THEMES.Light) {
            setTheme(THEMES.Dark);
        }
    }

    return (
        <header className={styles.root}>
        <img src={Logo} className={styles.logo} alt="logo"/>
        <button onClick={switchTheme} className={styles.themeSwitcher}>switchTheme</button>
    </header>
    );
};
