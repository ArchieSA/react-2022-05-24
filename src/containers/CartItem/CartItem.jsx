import {  useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";

const CartItem = ({ productId, className, selectedProducts }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  const qtyProduct = useSelector((state) => selectProductCountFromBasket(state, productId))
  return (
      <div className={className}>
        {productName}
        <span>{qtyProduct}</span>
      </div>
  );
};

export default CartItem;
