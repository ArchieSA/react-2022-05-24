import React from "react";
import { useSelector } from "react-redux";
import Review from "../../components/Review/component";
import { selectReviewTextById } from "../../store/review/selectors";
import { selectReviewRatingById } from "../../store/review/selectors";
import { selectReviewUserIdById } from "../../store/review/selectors";

const ReviewContainer = ({className, reviewId}) => {
    const reviewText = useSelector(state => selectReviewTextById(state, reviewId));
    const reviewRating = useSelector(state => selectReviewRatingById(state, reviewId));
    const reviewUserId = useSelector(state => selectReviewUserIdById(state, reviewId));

    return <Review 
        className={className} 
        userId={reviewUserId} 
        text={reviewText} 
        rating={reviewRating} 
    />
}

export default ReviewContainer;
