import { BasketItem } from "../../components/BasketItem/BasketItem";
import useProductWithCount from "../../hooks/useProductWithCount";

export const BasketItemContainer = ({ productId, className }) => {
  const { productName, productCount } = useProductWithCount(productId);

  return (
    <BasketItem
      productName={productName}
      productCount={productCount}
      className={className}
    />
  );
};
