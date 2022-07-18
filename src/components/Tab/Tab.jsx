import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Tab = ({ to, title }) => {
  // console.log(date(id));
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames(styles.root, {
          [styles.selected]: isActive,
        })
      }
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
