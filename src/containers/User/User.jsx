import React from "react";
import { User } from "../../components/User/User";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserNameById } from "../../store/user/selectors";
import { selectIsFailed,  selectIsLoading } from "../../store/product/selectors";
import {
    loadUsersIfNotExist,
  } from "../../store/user/thunk/load-users";

  
const UserContainer = ({ userId, className }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);
  
  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);
 

  const name = useSelector((state) => selectUserNameById(state, userId));

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
