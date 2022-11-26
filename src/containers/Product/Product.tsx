import React, { useCallback } from "react";
import { Product } from "../../components/Product/Product";
import { useDispatch } from "react-redux";
import useProductWithCount from "../../hooks/useProductWithCount";
import { useAppDispatch } from "../../hooks/hook_ts";
import basketSlice, {BasketActionPayload} from "../../store/basket";

interface ProductContainerProps {
  productId: string;
  className: string;
}

const ProductContainer: React.FC<ProductContainerProps> = ({
  productId,
  className,
}) => {
  // console.log(productId);
  const { productName, productCount } = useProductWithCount(productId);
  console.log(productName);
  console.log(productCount);
  const dispatch = useAppDispatch();

  const onRemoveProduct = useCallback(
    () => dispatch<any>(basketSlice.actions.remove({ productId })),
    [productId]
  );
  const onAddProduct = useCallback(
    () => dispatch<any>(basketSlice.actions.add({ productId })),
    [productId]
  );

  return (
    <Product
      name={productName}
      productCount={productCount}
      removeProduct={onRemoveProduct}
      addProduct={onAddProduct}
      className={className}
    />
  );
};

export default ProductContainer;
