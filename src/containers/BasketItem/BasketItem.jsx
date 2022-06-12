import { useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem/BasketItem";
import { selectProductNameFromBasket } from "../../store/basket/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";

const BasketItemContainer = ({className, productId}) => {
    const productName = useSelector((state) => selectProductNameFromBasket(state, productId));
    const productCount = useSelector((state) => selectProductCountFromBasket(state, productId));
  
    return <BasketItem 
        className={className} 
        productName={productName} 
        productCount={productCount} 
    />
}

export default BasketItemContainer;
