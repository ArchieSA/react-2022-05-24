export const MenuItem = ({ menuItem }) => {
  return (
    <li>
      {menuItem.name ?? 'Unknown menu item'} - {menuItem.price ?? 0}&nbsp;₽
    </li>
  );
};
