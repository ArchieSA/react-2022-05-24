import React from "react";
interface Product {
    id: string;
    name: string;
}
declare type ProductsProps = {
    products: Product[];
};
export declare const Products: React.FC<ProductsProps>;
export {};
