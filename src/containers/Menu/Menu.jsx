import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Menu/Menu";
import { loadProductsIfNotExist } from "../../store/menu/thunks/load-products";
import { selectRestaurantMenu } from "../../store/restaurant/selectors";

const MenuContainer = ({ restaurantId, className }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsIfNotExist(restaurantId))}
    );
       
    const productIds = useSelector((state) => selectRestaurantMenu(state, restaurantId));
   
    return (
        <Menu productIds={productIds} className={className} />
    );
};

export default MenuContainer;