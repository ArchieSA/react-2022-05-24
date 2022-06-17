import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsFailed,
  selectIsLoading,
  selectUserIds,
} from '../../store/user/selectors';
import { loadUsersIfNotExist } from '../../store/user/thunks/load-users';
import { Reviews } from '../../components/Reviews/component';

const ReviewsContainer = ({ reviewIds, className }) => {
  const dispatch = useDispatch();
  const userIds = useSelector(selectUserIds);
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return userIds?.length ? (
    <div className={className}>
      <Reviews reviewIds={reviewIds} />
    </div>
  ) : null;
};

export default ReviewsContainer;
