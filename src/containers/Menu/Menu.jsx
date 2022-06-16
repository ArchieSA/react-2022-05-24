import { useSelector, useDispatch } from "react-redux/es/exports";
import Menu from "../../components/Menu/Menu";
import { 
    selectIsLoading, 
    selectIsFailed, 
    selectProductIds 
} from "../../store/product/selectors";

import { useEffect } from "react";
import { loadProductsIfNotExist } from "../../store/product/thunks/load-products";


const MenuContainer = ({className, restaurantId, productIds}) => {
    console.log('id from container: ', restaurantId);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isFailed = useSelector(selectIsFailed);
    
    useEffect(() => {
        dispatch(loadProductsIfNotExist(restaurantId));
    }, [restaurantId])

    console.log('here', restaurantId);

    if (isLoading) {
        return <span>Loading...</span>;
      }
    
    if (isFailed) {
        return <span>Error</span>;
    }

    return (
        <Menu productIds={productIds} className={className}/>
    )
}

export default MenuContainer;