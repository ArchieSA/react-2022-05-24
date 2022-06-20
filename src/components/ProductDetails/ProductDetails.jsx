import styles from './styles.module.css';

export const ProductDetails = ({
  productName,
  productPrice,
  productIngredients,
}) => {
  return <div className={styles.root}>
    <h2>{productName}</h2>
    <p><b>Price:</b> {productPrice}₽</p>
    <p><b>Ingredients:</b> {productIngredients.join(', ')}</p>
  </div>;
};
