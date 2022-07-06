import {selectRestaurantState} from "../restaurant/selectors";

export const selectProductState = (state) => state.product;

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductState(state).entities[id]?.name;

export const selectIsProductsLoading = (state) =>
  selectProductState(state).status === "loading";
export const selectIsProductsFailed = (state) =>
  selectProductState(state).status === "failed";

export const selectProducts = (state) =>
{
    let arrays = Object.values(selectProductState(state).entities);

    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {

            newArr.push({id: arrays[i].id, name: arrays[i].name});

    }
    return newArr;
};
