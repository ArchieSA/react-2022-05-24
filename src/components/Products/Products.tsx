import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
}
type ProductsProps = {
  products: Product[];
};
export const Products: React.FC<ProductsProps> = ({ products }) => {
  // const productName = useSelector((state) =>
  //   selectProductNameById(state, productId)
  // );
    console.log(products);
  return (
      <div className={styles.mainWrapper}>
    <div className={classnames(styles.root)}>
      {products?.map(({ id, name }) => (
        <Link className={styles.product} key={id} to={`/product/${id}`}>
          {name}
        </Link>
      ))}
    </div>
      </div>
  );
};
