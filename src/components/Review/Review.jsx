import { Rate } from "../Rate/Rate";
import styles from './styles.module.css'

export const Review = ({review}) => {
    return <>
        <div className={styles.user}>{review.user}</div>
        <Rate rate={review.rating} />
        <div>{review.text}</div>
        <br />
    </>;
}