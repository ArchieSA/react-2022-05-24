import Star from './imgs/star.svg'
import StarGold from './imgs/star-gold.svg'

import styles from './styles.module.css';


export const Rate = ({ countStar }) => {
    const MAX_LENGTH = 5;
    const activeStar = Array(countStar).fill(true);
    const deactiveStar = Array(MAX_LENGTH - countStar).fill(false);
    const newArrList = [...activeStar, ...deactiveStar];
    console.log(newArrList)
    return (
        <div>
            {
                newArrList.map((elem) => {
                    return elem === true ? 
                        <img  data-value = {countStar} alt="" src={StarGold} className={styles.star} loading="lazy" /> :
                        <img alt="" src={Star} className={styles.star} loading="lazy" />
                })
            }
        </div>
    )
}