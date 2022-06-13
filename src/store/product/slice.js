import { createSlice } from "@reduxjs/toolkit";
import { normalizedProducts } from "../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {}),
  ids: [normalizedProducts.map(({ id }) => id)],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice;
