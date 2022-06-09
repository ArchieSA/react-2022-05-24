import { useSelector } from "react-redux";
import { selectReviewTextById, selectReviewUserId, selectReviewRating} from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/component"; 

const ReviewContainer = ({reviewId, className}) => {
 
    const reviewText = useSelector((state) => 
        selectReviewTextById(state, reviewId)
    );

    const reviewUserId = useSelector((state) =>
        selectReviewUserId(state, reviewId)
    )

    const reviewRating = useSelector((state) => 
        selectReviewRating(state, reviewId)
    );


    return <MemoReview text={reviewText} user={reviewUserId} rating={reviewRating}/>
}

export default ReviewContainer