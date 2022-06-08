export const CartProduct = ({ productName, productCount, className }) => (
  <div className={className}>
    <span>{productName}</span>
    <span>{productCount}</span>
  </div>
);
