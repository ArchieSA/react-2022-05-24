import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "./constants";

export const Rating = ({ value, size = "medium", isInputPossible = false, onClick}) => {

  let ratingElements = new Array(MAX_RATING).fill(null).map((_, index) => {
    let star;

    if (isInputPossible) {
      star = <img
              alt="dynamic rating"
              src={index >= value ? Star : GoldStar}
              key={index}
              className={classnames(styles.star, styles[size])}
              loading="lazy"
              onClick = {() => onClick(index + 1)}
            />
    } else {
      star = <img
              alt="static rating"
              src={index >= value ? Star : GoldStar}
              key={index}
              className={classnames(styles.star, styles[size])}
              loading="lazy"
            />
    }

    return star;
  });

  return (
      <div>
        {ratingElements}
      </div>
  )
};
