import React, { useEffect } from "react";
import { User } from "../../components/User/User";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectIsFailed, selectUserNameById } from "../../store/user/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-users";

const UserContainer = ({ userId, className }) => {
  const dispatch = useDispatch();

  const name = useSelector((state) => selectUserNameById(state, userId));
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

  return <User name={name} className={className} />;
};

export default UserContainer;
