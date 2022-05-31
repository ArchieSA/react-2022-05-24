import React from 'react';
import svg_gold from './imgs/star-gold.svg'
import svg_black from './imgs/star.svg'
import styles from './styles.module.css';


const Makestar = ({rate}) => {
    let star = []
    for (let i = 0; i < rate; i++) {
        star.push(<img src={svg_gold} className={styles.icon} loading="lazy"/>)
      }
    for (let i = rate; i < 5; i++) {
        star.push(<img src={svg_black} className={styles.icon} loading="lazy"/>)
    }
    return star  
}

export const Rate = ({ rate }) => {
    return (
        <div>
                <Makestar rate={rate}/>
        </div>
    )
    

}