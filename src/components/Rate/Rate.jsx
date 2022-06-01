import Star from './imgs/star.svg'
import StarGold from './imgs/star-gold.svg'

import styles from './styles.module.css';

const MAX_LENGTH = 5;
export const Rate = ({ countStar }) => {
    const activeStar = Array(countStar).fill(true);
    const deactiveStar = Array(MAX_LENGTH - countStar).fill(false);
    const newArrList = [...activeStar, ...deactiveStar];
    return (
        <div>
            {
                newArrList.map((elem) => {
                 return <img alt = "star" className={styles.star} src={elem === true  ? StarGold : Star} loading="lazy"/>})
            }
        </div>
    )
}
