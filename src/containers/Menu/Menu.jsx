import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsIfNotExist } from "../../store/product/thunks/load-product";
import { selectRestaurantMenuIds } from "../../store/restaurant/selectors";
import { selectIsLoading, selectIsFailed } from "../../store/product/selectors";
import Menu from "../../components/Menu/Menu";
import styles from './styles.module.css';

const MenuContainer = ({ restaurantId, className }) => {
    const dispatch = useDispatch();
    
    const isLoading = useSelector(selectIsLoading);
    const isFailed = useSelector(selectIsFailed);
    const productIds = useSelector((state) => selectRestaurantMenuIds(state, restaurantId));

    useEffect(() => {
        dispatch(loadProductsIfNotExist(restaurantId));
    }, [restaurantId]);

    if (isLoading) {
        return <div className={styles.await}>Menu Loading...</div>;
      }
    
    if (isFailed) {
        return <div className={styles.await}>Menu Error</div>;
    }
    
    return <Menu productIds={productIds} className={className} />
};

export default MenuContainer;
