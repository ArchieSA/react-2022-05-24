import { useSelector } from 'react-redux';
import { selectBasket, selectBasketIds, selectProductCountFromBasket } from '../../store/basket/selectors';
import Basket from './../../components/Basket/Basket';
 

const BasketContainer = ({ className }) => {

    const productIds = useSelector(selectBasket);
    const productName = useSelector
  // console.log(productIds)
  return <Basket productIds={productIds} className={className}/>;
  };
  
  export default BasketContainer;