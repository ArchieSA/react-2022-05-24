import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import {Link} from "react-router-dom";

export const Products = ({ products, className }) => {
  // const productName = useSelector((state) =>
  //   selectProductNameById(state, productId)
  // );
    console.log(products);
  return (
      <div>
      {products?.map(({id, name}) => (
          <div>
              <Link key={id} to={`/product/?{id}`} style={{color: "black"}}>
                  {name}
              </Link>
          </div>
      ))}
      </div>

  );
};
