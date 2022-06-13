import React from "react";

const User = ({name, className}) => {
    return (
        <span className={className}>{name}</span>
    );
}

export default User;