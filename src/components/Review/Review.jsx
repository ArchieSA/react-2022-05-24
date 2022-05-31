import { Rate } from '../Rate/Rate';
import styles from './styles.module.css';

export const Review = ({ review }) => <div className={styles.root}>
  {review.user}:
  <q className={styles.text}>{review.text}</q>
  <Rate value={Number(review.rating) || 0} />
</div>;
