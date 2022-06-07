import Star from "../img/star.svg";
import GoldStar from "../img/star-gold.svg";

import styles from "../styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "../constants";

export const RatingInput = ({ rating, size = "medium", changeRating}) => {
    return (
        <div>
          {new Array(MAX_RATING).fill(null).map((_, index) => {
            return <img alt="rating input"
                        src={index >= rating ? Star : GoldStar}
                        key={index}
                        className={classnames(styles.star, styles[size])}
                        loading="lazy"
                        onClick = {() => changeRating(index + 1)}
                    />
              }
            )
          }
        </div>
    )
  };