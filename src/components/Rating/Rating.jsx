import Star from './img/star.svg';
import GoldStar from './img/star-gold.svg';

import styles from './styles.module.css';
import classnames from 'classnames';
import { MAX_RATING } from './constants';

export const Rating = ({ value, size = 'medium', change, className }) => {
  return (
    <div className={classnames(className)}>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={classnames(styles.star, styles[size], {
            [styles.clickable]: !!change,
          })}
          loading="lazy"
          onClick={() => typeof change === 'function' && change(index + 1)}
          alt="star"
        />
      ))}
    </div>
  );
};
