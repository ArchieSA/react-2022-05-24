import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Tab = ({ label, id, className, date, dateLater }) => {
    // console.log(date(id));
  return (
    <NavLink
      to={`/restaurants/${date(id)}/${dateLater(label)}`}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.selected]: isActive,
        })
      }
    >
      {label}
    </NavLink>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
};
