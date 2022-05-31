import styles from './styles.module.css';
import Star from './imgs/star.svg';
import StarGold from './imgs/star-gold.svg';
import classNames from 'classnames';

export const Rate = ({ value, className }) => (
  <div className={classNames(styles.root, className)}>
    {Array.from({ length: 5 }, (k, v) => v + 1).map(i => (
      <img 
        src={i > value ? Star : StarGold}
        loading="lazy" 
        alt={i > value ? 'star' : 'gold star'} 
        className={styles.icon}
        key={i} />
    ))}
  </div>
);
