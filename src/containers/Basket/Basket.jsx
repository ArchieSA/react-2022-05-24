import { useSelector } from "react-redux"
import Basket from "../../components/Basket/Basket";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";

const BasketContainer = ({className}) => {
    const selectedProducts = useSelector(selectProductIdsFromBasket);

    return <Basket className={className} selectedProducts={selectedProducts}/>
}

export default BasketContainer