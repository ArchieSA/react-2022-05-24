import React from "react";

export const Menu = ({menu}) => {
    return(
        <>
        <div>
          <p>Menu</p>
            <ul>
                {menu.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
        </>
    )
}