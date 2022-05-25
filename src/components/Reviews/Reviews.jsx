import React from 'react';

export const Reviews = ({review}) => {
   return (
      <li>{review || "unknown review"}</li>
   );
}