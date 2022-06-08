import { CartProduct } from "../../components/CartProduct/CartProduct";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../store/product/selectors";
import { selectProductCountFromCart } from "../../store/cart/selectors";

const CartProductContainer = ({ selectedProductId, className }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, selectedProductId)
  );

  const productCount = useSelector((state) =>
    selectProductCountFromCart(state, selectedProductId)
  );

  return (
    <CartProduct
      productName={productName}
      productCount={productCount}
      className={className}
    />
  );
};

export default CartProductContainer;
