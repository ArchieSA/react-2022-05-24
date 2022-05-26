import React from 'react'
import { MenuItem } from '../MenuItem/MenuItem'

export const Menu = ({menuItems}) => {
    return <>
            <h2>Menu</h2>
            {menuItems.map(
                (menuItem, i) => <MenuItem key={i} name={menuItem} />
            )}
        </>;
}