import React from "react";
import BasketProduct from "../../components/BasketProducts/BasketProducts";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";

const BasketProductContainer = ({ className, id }) => {
    const name = useSelector((state) => selectProductNameById(state, id));
    const count = useSelector((state) => selectProductCountFromBasket(state, id));
    
    return (
        <BasketProduct className={className} name={name} count={count}/>
    );
};

export default BasketProductContainer;
