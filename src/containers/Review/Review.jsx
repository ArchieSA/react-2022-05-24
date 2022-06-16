import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { loadUsers } from "../../store/user/thunks/load-users";

const ReviewContainer = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <MemoReview
      text={text}
      rating={rating}
      userId={userId}
      className={className}
    />
  );
};

export default ReviewContainer;
