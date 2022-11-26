import React, { useCallback, useState } from "react";
import { Reviews } from "../../components/Reviews/component";
import reviewSlice, { Review } from "../../store/review";
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";
import { selectRestaurantReviewsById } from "../../store/restaurant/selectors";
import userSlice, { User } from "../../store/user";

interface ReviewAddrProps {
  reviewIds: (string | undefined)[];
  restaurantId?: string;
}

export const ReviewAdd: React.FC<ReviewAddrProps> = ({
  reviewIds,
  restaurantId,
}) => {
  const [reviewIdsn, setReview] = useState(reviewIds);

  const dispatch = useAppDispatch();
  const NewDispatch = useCallback((f: { NewReview: Review; NewUser: User }) => {
    dispatch<any>(reviewSlice.actions.addReview(f.NewReview));
    dispatch<any>(userSlice.actions.addUser(f.NewUser));
    const NewId = [...reviewIdsn, f.NewReview.id];
    setReview(NewId);
    return f;
  }, []);

  // console.log(reviewIdsn);

  return <Reviews reviewIds={reviewIdsn} addNewReview={NewDispatch} />;
};
