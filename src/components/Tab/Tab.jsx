import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Tab = ({ to, title, className }) => {
  // console.log(date(id));
  return (
    <NavLink
      to={`/restaurants/${to}`}
      className={({ isActive }) =>
        classnames(styles.root, {
          [styles.selected]: isActive,
        })
      }
      style={className}
    >
      {title}
    </NavLink>
  );
};

// Tab.propTypes = {
//   label: PropTypes.string.isRequired,
//   isSelected: PropTypes.bool,
//   className: PropTypes.string,
// };
