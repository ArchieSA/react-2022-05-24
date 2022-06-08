import classnames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { StoreContext } from "./../components/context/ThemeContext/StoreContext";

function useSelector() {
	const componentKey = "Basket";
	const [state, setState] = useState();
	const store = useContext(StoreContext);

	useEffect(() => {
		store.subscribe(componentKey, (state) => setState(state.basket));
		return () => store.unsubscribe(componentKey);
	});
	return state;
}

const Basket = ({ className }) => {
	const selectedProducts = useSelector();
	return (
		<div className={classnames(styles.root, className)}>
			<h2>Basket</h2>
			{selectedProducts &&
				Object.keys(selectedProducts).map((productKey) => (
					<div key={productKey} className={styles.product}>
						<span>{productKey}</span>
						<span>{selectedProducts[productKey]}</span>
					</div>
				))}
		</div>
	);
};

export default Basket;
