import React from 'react';

export const Menu = (props) => {
    return (
        <div>
           <b>Меню:</b> {props.dishItem || 'empty'}
        </div>
    );
}