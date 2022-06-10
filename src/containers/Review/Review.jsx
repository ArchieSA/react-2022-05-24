import { useSelector } from "react-redux";
import Review from "../../components/Review/Review";
import {selectReviewById, selectReviewTextById, selectReviewRatingById} from "../../store/review/selectors";
import {selectUserNameById} from "../../store/user/selectors";
const ReviewContainer = ({ reviewId, className }) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));
    const userName = useSelector((state) => selectUserNameById(state, review.userId));
    const text = useSelector((state) => selectReviewTextById(state, reviewId));
    const rating = useSelector((state) => selectReviewRatingById(state, reviewId));
    console.log(text);
    return (
        <Review user={userName} text={text} rating={rating} className={className}/>
    );
}

export default ReviewContainer;