import React from 'react';
import {Product} from "../Product/Product";

export const Menu = ({menu}) => (<div>
    {
        menu.map((product) => <Product key={product.id} name={product.name}/>)
    }
</div>);