import React from "react";

const BasketProduct = ({ name, productCount }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{productCount}</span>
    </div>
  );
};

export default BasketProduct;
