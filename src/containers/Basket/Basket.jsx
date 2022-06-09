import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket"
import { selectBasket } from "../../store/basket/selectors";

const BasketContainer = ({className}) => {
  const selectedProducts = useSelector(selectBasket);
    return (<Basket products={selectedProducts} className={className}/>);
}

export default BasketContainer;