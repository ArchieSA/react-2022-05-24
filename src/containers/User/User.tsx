import React from "react";
import { User } from "../../components/User/User";
import { useSelector } from "react-redux";
import { selectUserNameById } from "../../store/user/selectors";
import {useAppSelector} from "../../hooks/hook_ts";

interface Interface {
  userId: string, className: string
}
const UserContainer = ({ userId, className }: Interface) => {
  const name = useAppSelector((state) => selectUserNameById(state, userId));

  if (!name) {
    return null;
  }

  return <User name={name} className={className} />;
};

export default UserContainer;
