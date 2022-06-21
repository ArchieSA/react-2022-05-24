import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMenuAllRestaurantsIfNotExist } from "../../store/product/thunk/load-menuAllRestaurants";
import { selectIsProductsLoading, selectIsProductsFailed, selectProducts } from "../../store/product/selectors";
import { MenuList } from "../../components/MenuList/MenuList";

const MenuAllResturantsContainer = () => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadMenuAllRestaurantsIfNotExist());
  }, []);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  if (isProductsLoading) {
    return <span>Loading</span>;
  }

  return (<MenuList products={products} />);
};

export default MenuAllResturantsContainer;
