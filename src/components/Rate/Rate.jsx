import React from "react";

import StarGold from './imgs/star-gold.svg';
import Star from './imgs/star.svg';

import style from './style.module.css';

function generateImgStar(countStarGold) {
    const allStar = 5;
    let listElementStar = [];

    for (let i = 0; i < allStar; i++) {
        let elementStar = null;
        
        if (i < countStarGold - 1) {
            elementStar = <img key={i} className={style.star} src={StarGold} alt="золотая звезда" loading="lazy" />
        } else {
            elementStar = <img key={i} className={style.star} src={Star} alt="звезда" loading="lazy" />
        }

        listElementStar.push(elementStar)
    }

    return listElementStar;
}

export const Rate = ({value}) => {
    return (
        <>
            {generateImgStar(value)}
        </>
    );
} 