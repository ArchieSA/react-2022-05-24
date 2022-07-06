import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export const Products = ({ products, className }) => {
  // const productName = useSelector((state) =>
  //   selectProductNameById(state, productId)
  // );
  //   console.log(products);
  return (
      <div className={classnames(className, styles.root)}>
      {products?.map(({id, name}) => (
              <Link  className={styles.product} key={id} to={`/product/${id}`}>
                  {name}
              </Link>
      ))}
      </div>

  );
};
