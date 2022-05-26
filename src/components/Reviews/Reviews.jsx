import React from 'react';

export const Reviews = ({reviewItems}) => {
    return (
        <div>
            <span>Отзывы:</span>
            <ul>
                {reviewItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}