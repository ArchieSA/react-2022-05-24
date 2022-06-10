import React from "react";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";
import BasketProduct from "../BasketProduct/BasketProduct";

const BasketProductContainer = (productKey, productId) => {
    const productName = useSelector((state) =>
        selectProductNameById(state, productId)
    );
    const productCount = useSelector((state) =>
        selectProductCountFromBasket(state, productId)
    );
    console.log(productCount);
    return (
        <div key={productKey}>
            <BasketProduct name={productName} productCount={productCount} />
        </div>
    );
};

export default BasketProductContainer;
