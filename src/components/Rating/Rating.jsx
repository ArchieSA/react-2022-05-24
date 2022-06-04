import React, {useState, useEffect} from "react";
import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";
import styles from "./styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "./constants";

export const Rating = ({ value, size = "medium", editable = false, onChange }) => {
  const [rate, setRate] = useState(value);

  useEffect(() => {
    setRate(value);
  }, [value]);

  const changeRate = (rate) => {
    if (editable) {
      setRate(rate);
      onChange(rate);
    }
  }

  return (
    <div>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
          <img
              src={index >= rate ? Star : GoldStar}
              key={index}
              className={classnames(styles.star, styles[size])}
              loading="lazy"
              onClick={() => changeRate(index + 1)}
          />
      ))}
    </div>
  )
};
