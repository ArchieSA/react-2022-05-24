import React from 'react';

export const Menu = ({menuName}) => {
   return (
      <li>{menuName || "unknown dish"}</li>
   );
}