import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { BasketProduct } from "../../components/BasketProduct/BasketProduct";
import { selectProductCountById } from "../../store/basket/selectors";

export const BasketProductContainer = ({ productId }) => {

    const productName = useSelector((state) =>
        selectProductNameById(state, productId)
    );
    const productCount = useSelector((state) =>
        selectProductCountById(state, productId)
    );
    return <BasketProduct productId={productId} productName={productName} productCount={productCount} />;
};


