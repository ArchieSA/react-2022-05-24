import { selectRestaurantState } from "../restaurant/selectors";
import { RootState } from "../store";
import { Product } from "./index";

type ProductProps = {
  state: RootState;
  productId: string | undefined;
};
export const selectProductState = (state: RootState) => state.product;

export const selectProductIds = (state: RootState) =>
  selectProductState(state).ids;
export const selectProductById = (
  state: RootState,
  productId: string | undefined
): Product => {const id = productId; return selectProductState(state).entities[id || ""];}

export const selectProductNameById = ({ state, productId }: ProductProps) =>
  selectProductState(state).entities[productId || ""]?.name;

export const selectIsProductsLoading = (state: RootState) =>
  selectProductState(state).status === "loading";
export const selectIsProductsFailed = (state: RootState) =>
  selectProductState(state).status === "failed";

export const selectProducts = (state: RootState) => {
  let arrays = Object.values(selectProductState(state).entities);

  let newArr = [];
  for (let i = 0; i < arrays.length; i++) {
    newArr.push({ id: arrays[i].id, name: arrays[i].name });
  }
  return newArr;
};
