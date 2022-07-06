import { useSelector } from "react-redux";
import { selectProductNameById } from "../store/product/selectors";
import { selectProductCountFromBasket } from "../store/basket/selectors";

const useProductWithCount = (productId) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  const productCount = useSelector((state) =>
    selectProductCountFromBasket(state, productId)
  );

  return { productName, productCount };
};

export default useProductWithCount;
