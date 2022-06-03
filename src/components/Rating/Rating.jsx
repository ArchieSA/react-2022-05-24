import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import {MAX_RATING} from "./constants";

export const Rating = ({ value, size = "medium", onClick}) => {
  return (
      <div>
        {new Array(MAX_RATING).fill(null).map((_, index) => {
          return <img alt="dynamic rating"
                      src={index >= value ? Star : GoldStar}
                      key={index}
                      className={classnames(styles.star, styles[size])}
                      loading="lazy"
                      onClick = {() => typeof onClick === 'function' ? onClick(index + 1) : false}
                  />
            }
          )
        }
      </div>
  )
};
