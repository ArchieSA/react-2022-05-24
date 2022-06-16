import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "../../components/Reviews/component";
import {selectRestaurantReviewIds } from "../../store/restaurant/selectors";
import { selectIsLoading, selectIsFailed } from "../../store/review/selectors";
import { loadReviewsIfNotExist } from "../../store/review/thunks/load-reviews";
import styles from "./styles.module.css";

export const ReviewsContainer = ({ restaurantId }) => {
    const dispatch = useDispatch();
    
    const isLoading = useSelector(selectIsLoading);
    const isFailed = useSelector(selectIsFailed);
    const reviewIds = useSelector((state) => selectRestaurantReviewIds(state, restaurantId));
    
    useEffect(() => {
        dispatch(loadReviewsIfNotExist(restaurantId));
    }, [reviewIds]);

    if (isLoading) {
        return <div className={styles.await}>Reviews Loading...</div>;
    }
    
    if (isFailed) {
        return <div className={styles.await}>Reviews Error</div>;
    }

  return <Reviews reviewIds = {reviewIds}/>;
};
