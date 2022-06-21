import React from "react";

const List = ({items, label}) => {
    return(
    <>
    <h3>{label}</h3>
    <ul>
    {items?.map((item)=>(
        <li>{item}</li>
    ))}
    </ul>
    </>
    )
}

export default List;