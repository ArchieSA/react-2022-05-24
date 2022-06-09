import {  useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";

const CartItem = ({ productId, className, selectedProducts }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  return (
      <div key={productId} className={className}>
        {productName}
        <span>{selectedProducts}</span>
      </div>
  );
};

export default CartItem;
