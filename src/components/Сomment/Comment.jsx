import React from "react";

const Comment = ({textComment, userName}) => {
    return (
        <li>
            {userName + ': ' + textComment}
        </li>
    );
}

export default Comment;