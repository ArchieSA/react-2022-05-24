import React from "react";
import { User } from "../../components/User/User";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsFailed, selectUserIsLoading, selectUserNameById, selectUsersExist } from "../../store/user/selectors";
import { useEffect } from "react";
import loadUsersIfNotExist from "../../store/user/thunks/load-users";

const UserContainer = ({ userId, className }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => selectUserNameById(state, userId));
  const isExistUsers = useSelector(selectUsersExist);
  const isLoading = useSelector(selectUserIsLoading);
  const isFailed = useSelector(selectUserIsFailed);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (!isExistUsers || isLoading) {
    return null;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <User name={name} className={className} />;
};

export default UserContainer;
