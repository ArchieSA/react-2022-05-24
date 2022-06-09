import { Basket } from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import { selectAllProductById } from "../../store/basket/selectors";
const BasketContainer = ({ id }) => {
    const selectedProducts = useSelector(selectAllProductById);
    return <Basket
    productIds={selectedProducts}
    />;
};

export default BasketContainer;
