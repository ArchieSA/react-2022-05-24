import ReviewContainer from "../Review/Review";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  
    selectIsLoading, 
    selectIsFailed,
    selectReviewById
} from "../../store/review/selectors";

import { loadReviewsIfNotExist } from "../../store/review/thunks/load-reviews";

const ReviewsContainer = ({restaurantId, reviewIds}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isFailed = useSelector(selectIsFailed);

    useEffect(() => {
        dispatch(loadReviewsIfNotExist(restaurantId))
    }, [restaurantId])

    if (isLoading) {
        return <span>Loading...</span>;
      }
    
    if (isFailed) {
        return <span>Error</span>;
    }

    return(
    <>
        {reviewIds.map((item, i) => (
            <ReviewContainer key={i} restaurantId={restaurantId} reviewId={item}/>
        ))}
    </>
    )
}

export default ReviewsContainer;
