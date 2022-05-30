import React from "react";
import { Rate } from "../Rate/Rate";

export const Reviews = (props) => {
    return (
        <div>
            <b>{props.name}</b>: {props.text}
            <Rate value={props.rating} />
        </div>
    )
}