import { useSelector } from "react-redux";
import { selectReviewNameById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/component"; 

const ReviewContainer = ({reviewId}) => {
    const reviewText = useSelector((state) => 
        selectReviewNameById(state, reviewId)
    )

    return <MemoReview text={reviewText}/>
}

export default ReviewContainer