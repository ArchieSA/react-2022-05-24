import React from "react";
import { useSelector } from "react-redux";
import { selectReviewRatingById, selectReviewTextById, selectReviewUsersById } from "../../store/review/selectorReview";
import { selectReviewById } from './../../store/review/selectorReview';
import { Review } from "../../components/Review/Review";

export const ReviewContainer = ({ reviewId }) => {
    const reviewIdsh = useSelector((state) =>
        selectReviewById(state, reviewId)
    );
    const reviewText = useSelector((state) =>
        selectReviewTextById(state, reviewId)
    );
    const reviewRating = useSelector((state) =>
        selectReviewRatingById(state, reviewId)
    );
    const reviewUserId = useSelector((state) =>
    selectReviewUsersById(state, reviewId)
);

    return (
        <div>
            <Review
                key={reviewIdsh}
                userId={reviewUserId}
                text={reviewText}
                rating={reviewRating}
            />
        </div>
    )
};
