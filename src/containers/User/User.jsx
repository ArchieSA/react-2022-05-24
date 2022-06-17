import React, { useEffect } from "react";
import { User } from "../../components/User/User";
import { useSelector, useDispatch } from "react-redux";
import { selectUserNameById } from "../../store/user/selectors";
import { selectIsLoading, selectIsFailed } from "../../store/user/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-user";

const UserContainer = ({ userId, className }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  const name = useSelector((state) => selectUserNameById(state, userId));

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (!name) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <User name={name} className={className} />;
};

export default UserContainer;
