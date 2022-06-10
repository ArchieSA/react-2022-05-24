import { useSelector } from "react-redux";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import { selectProductCountFromBasket } from "../../store/basket/selectors";
import { selectProductNameById } from "../../store/product/selectors";

const BasketProductContainer = ({ productId }) => {
    
    const name = useSelector((state) => 
         selectProductNameById(state, productId)
    );

    const count  = useSelector((state) => 
        selectProductCountFromBasket(state, productId)
    );

    return (
        <BasketProduct name={name} productCount={count}/>
    );
}

export default BasketProductContainer;