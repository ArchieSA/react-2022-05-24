import { MemoReview } from "../../components/Review/component";
import { useSelector } from "react-redux";

import { selectReviewById } from "../../store/review/selectors";

export const ReviewContainer = ({ reviewId }) => {

  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );

  return (
    <MemoReview
                    userId={userId}
                    text={text}
                    rating={rating}
                />
  );
};

