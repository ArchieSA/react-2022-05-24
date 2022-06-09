import { useSelector } from "react-redux"
import Basket from "../../components/Basket/Basket";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";

const BasketContainer = ({className}) => {
    const productsIds = useSelector(selectProductIdsFromBasket)
    return <Basket className={className} productsIds={productsIds} />
}

export default BasketContainer