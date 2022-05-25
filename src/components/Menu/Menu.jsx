import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = ({ menu }) => {
  return (
    <>
      <p>Menu:</p>
      <ul>
        {menu.map(menuItem => (
          <MenuItem menuItem={menuItem} key={menuItem.id} />
        ))}
      </ul>
    </>
  );
};
