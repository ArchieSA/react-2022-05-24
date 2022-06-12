import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";
import { selectBasketItemIds } from "../../store/basket/selectors";

const BasketContainer = ({className}) => {
    const productIds = useSelector(selectBasketItemIds);

    return <Basket className={className} productIds={productIds} />
}

export default BasketContainer;
