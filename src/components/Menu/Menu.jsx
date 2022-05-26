import React from 'react';

export const Menu = ({ menuName, children }) => {
    return (
        <div>{menuName}{children}</div>
    );
}