import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import { MAX_RATING } from "./constants";
import React from "react";

export type ValueProps = {
  value: number;
  size?: string;
};

// export interface Style {
//     size: string;
// }

export const Rating = ({ value, size = "medium" }: ValueProps) => {
  return (
    <div>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={classnames(styles.star, styles[size])}
          loading="lazy"
        />
      ))}
    </div>
  );
};
