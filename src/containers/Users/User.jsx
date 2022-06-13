import React from "react";
import { useSelector } from "react-redux";
import { selectUserNameById } from "../../store/users/selector";
import User from "../../components/User/user";

const UserContainer = ({id, className}) => {
    const userName = useSelector((state) => selectUserNameById(state, id));

    return (
        <User name = {userName} className={className}/>
    );
}

export default UserContainer;