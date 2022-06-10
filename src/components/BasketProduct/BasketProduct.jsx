import styles from "./styles.module.css";

const BasketProduct = ({name, productCount}) => {
    console.log({name, productCount});
    return (
        
        <div key={name} className={styles.product}>
            <span>{name}</span>
            <span>{productCount}</span>
        </div>
    );
}

export default BasketProduct;