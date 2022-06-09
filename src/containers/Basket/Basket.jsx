import React from "react";
import { Basket } from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import {selectProductNameById} from "../../store/product/selectors";

const BasketContainer = (productId) => {
    const productName = useSelector((state) =>
        selectProductNameById(state, productId)
    );

    return <Basket productName={productName} />;
};

export default BasketContainer;