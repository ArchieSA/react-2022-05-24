import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { StoreContext } from "../context/ThemeContext/StoreContext";
import { addProduct, removeProduct } from "../../store/basket/actions";

function useSelector(productName) {
	const componentKey = "Product" + productName;
	const [state, setState] = useState();
	const store = useContext(StoreContext);

	useEffect(() => {
		store.subscribe(componentKey, (state) =>
			setState(state.basket[productName] || 0)
		);
		return () => store.unsubscribe(componentKey);
	});
	return state;
}

function useDispatch() {
	const store = useContext(StoreContext);
	return store?.dispatch.bind(store);
}

export const Product = ({ name, className }) => {
	const dispatch = useDispatch();
	const productCount = useSelector(name);

	return (
		<div className={classnames(styles.root, className)}>
			<span>{name}</span>
			<div className={styles.actions}>
				<button
					onClick={() => dispatch(removeProduct(name))}
					className={styles.action}
					disabled={productCount <= 0}
				>
					-
				</button>
				<div className={styles.count}>{productCount}</div>
				<button
					onClick={() => dispatch(addProduct(name))}
					className={styles.action}
					disabled={productCount >= 25}
				>
					+
				</button>
			</div>
		</div>
	);
};
