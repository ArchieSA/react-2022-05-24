import React from "react";

export const User = ({className, userName, key}) => {
    return  <span key={key} className={className}>{userName}</span>
}