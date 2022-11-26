import React from "react";
import {createArray} from "../../constants/lib";
import Star from "./Star";
import styles from "./styles.module.css";

export default function StarRating({
                                       totalStars = 5,
                                       selectedStars = 0,
                                       onRate = (f: number) => f
                                   }) {
    return (
        <div className={styles.stars}>
            {createArray(totalStars).map((n: number, i: number) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}
