import React from 'react';

export const Menu = ({menuItems}) => {
    return (
        <div>
            <span>Меню:</span>
            {menuItems.length > 0 &&
            <ul>
                <i>{menuItems.map((item) => <li key={item.name}>{item.name}</li>)}</i>
            </ul>
            }
        </div>
    );
}