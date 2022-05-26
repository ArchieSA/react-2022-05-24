import React from 'react';

export const Menu = ({menuItems}) => {
    return (
        <div>
            <span>Меню:</span>
            <ul>
                <i>{menuItems.map((item, index) => <li key={index}>{item}</li>)}</i>
            </ul>
        </div>
    );
}