import React from "react";
import { User } from "../../components/User/User";
import { useSelector } from "react-redux";
import { selectUserNameById } from "../../store/user/selectors";

const UserContainer = ({ userId, className }) => {
  const name = useSelector((state) => selectUserNameById(state, userId));

  if (!name) {
    return null;
  }

  return <User name={name} className={className} />;
};

export default UserContainer;
