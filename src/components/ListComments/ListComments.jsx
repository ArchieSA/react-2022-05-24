import React from "react";
import Comment from "../Сomment/Comment";

const ListComments = ({listCommentsItem}) => {
    const listComments = listCommentsItem.map((e, i) => <Comment key = {i} textComment = {e} userName = {'User' + i}/>);

    return (
        <>
            <h3>Отзывы:</h3>

            <ul>
                {listComments}
            </ul>
        </>
    );
}

export default ListComments;