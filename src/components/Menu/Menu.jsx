import React from 'react';
import Product from '../Product/Product';

const Menu = ({listNameProducts}) => {
    const products = listNameProducts.map((e, i) => <Product key = {i} nameProduct = {e}/>)
    
    return (
        <>
            <h3>Меню</h3>

            <ul>
                {products}
            </ul>
        </>
    );
}

export default Menu;