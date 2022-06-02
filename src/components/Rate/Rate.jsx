import React from "react";
import styles from './styles.module.css'

import { maxRating } from './constants'
import Star from "./imgs/star.svg";
import GoldStar from "./imgs/star-gold.svg";

export const Rate = ({ value }) => {
  return (
    <div>
      {new Array(maxRating).fill(null).map((item, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={styles.star}
          loading="lazy"
        />
      ))}
    </div>
  );
};
