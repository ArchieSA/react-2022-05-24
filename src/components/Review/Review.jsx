import React from 'react';

export const Review = ({ content }) => {
    return (
        <div>{content || 'There is no content here'}</div>
    );
}