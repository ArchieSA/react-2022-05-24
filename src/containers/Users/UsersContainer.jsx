import React from "react";
import { useSelector } from "react-redux";
import { Review } from "../../components/Review/Review";
import { Users } from "../../components/Users/Users";
import { selectUsersNameById } from "../../store/users/selectorUsers";

export const UsersContainer = ({ userId }) => {

    const userName = useSelector((state) =>
        selectUsersNameById(state, userId)
    );


    return (
        <div>
            <Users
                userName={userName}
            />
        </div>
    )
};