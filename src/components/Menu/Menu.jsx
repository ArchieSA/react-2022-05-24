import React from "react";

export const Menu = ({menu}) => {
    return(
        <>
        <div>
          <p>Menu</p>
            <ul>
                {menu.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </>
    )
}