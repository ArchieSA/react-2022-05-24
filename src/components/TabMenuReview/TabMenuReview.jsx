import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const TabMenuReview = ({ label, id, className }) => {
  return (
    <NavLink
      to={`/restaurants/${id}/${label}`}
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

TabMenuReview.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
};
