import {Product} from "../Product/Product";

export const Menu = ({menu}) => {
    return <>
        <h2>Menu</h2>
        {menu.map(
            (product) => <Product key={product.id} name={product.name} />
        )}
    </>
}