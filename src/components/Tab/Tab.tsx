import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

interface Interface {
  to?: string;
  title?: string;
  className?: {};
}
export const Tab: React.FC<Interface> = ({ to, title, className }) => {
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
