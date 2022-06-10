import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket"
import { selectProductsIdsFromBasket } from "../../store/basket/selectors";

const BasketContainer = ({className}) => {
  const productIds = useSelector(selectProductsIdsFromBasket);
    return (<Basket productIds={productIds} className={className}/>);
}

export default BasketContainer;