import React from "react";
declare type ProductProps = {
    name: string;
    productCount: number;
    removeProduct: (e: React.MouseEvent) => void;
    addProduct: (e: React.MouseEvent) => void;
    className: string;
};
export declare const Product: React.FC<ProductProps>;
export {};
