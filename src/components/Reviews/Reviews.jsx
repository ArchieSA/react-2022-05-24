import React from 'react';

export const Reviews = (props) => {
    return (
        <div> {props.text || 'empty reviews'}</div>
    );
}