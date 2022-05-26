import React from 'react';

export const Reviews = ({reviewItem}) => {
    return (
        <div>
            <span>Отзывы:</span>
            {reviewItem.length > 0 &&
            <ul>
                {reviewItem.map((item) => <li key={item.text}>{item.text}</li>)}
            </ul>
            }
        </div>
    );
}