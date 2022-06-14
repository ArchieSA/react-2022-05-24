import {  useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromBasket } from "../../store/basket/selectors";

const CartItem = ({ productId, className }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  const productCountFromBasket = useSelector((state) => selectProductCountFromBasket(state, productId))
  return (
      <div className={className}>
        {productName}
        <span>{productCountFromBasket}</span>
      </div>
  );
};

export default CartItem;
