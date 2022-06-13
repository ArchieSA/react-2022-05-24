import React from "react";

const BasketProduct = ({className, name, count }) => {
    return (
        <div className={className}>
            <span>{name}</span>
            <span>{count}</span>
        </div>
    );
};

export default BasketProduct;
