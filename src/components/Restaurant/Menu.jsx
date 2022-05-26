import React from 'react';

export const Menu = ({ menu }) => {
    const listItems = menu.map((item) =>
        <li>{item}</li>
    ); 
    return (
        <>
        <ul>{listItems}</ul>
        </>
    );
}