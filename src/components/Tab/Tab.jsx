import React, {useContext} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from './styles.module.css';
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext";
import {THEMES} from "../../constants/theme";

export const Tab = ({ label, onTabSelect, isSelected, className }) => {
    const {theme} = useContext(ThemeContext);
    return (
        <button
            className={classnames(styles.root, className, {
                [styles.selected]: isSelected,
                [styles.dark]: theme === THEMES.Dark,
                [styles.light]: theme === THEMES.Light,
            })}
            onClick={onTabSelect}
        >
            {label}
        </button>
    )
};


Tab.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    className: PropTypes.string,
}