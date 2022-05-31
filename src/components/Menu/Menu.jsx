import { Product } from '../Product/Product';

export const Menu = ({ menu }) => (
  <>
    {menu.map(product => (
      <Product key={product.id} name={product.name} />
    ))}
  </>
);
