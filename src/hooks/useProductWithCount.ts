import { selectProductNameById } from "../store/product/selectors";
import { selectProductCountFromBasket } from "../store/basket/selectors";
import { useAppSelector } from "./hook_ts";

const useProductWithCount = (productId: string) => {
  const productName: string = useAppSelector((state) =>
    selectProductNameById({ state, productId })
  );
  const productCount: number = useAppSelector((state) =>
    selectProductCountFromBasket({ state, productId })
  );
  return { productName, productCount };
};

export default useProductWithCount;
