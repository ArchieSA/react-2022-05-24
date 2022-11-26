import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductState = {
  entities: Record<string, Product>;
  ids: string[];
  status: string;
};

export interface Product {
  id: string;
  name: string;
  price: number;
  ingredients: [string, string];
}

const initialState: ProductState = {
  entities: {},
  ids: [],
  status: "notStarted",
};

type Acc = Record<string, Product>;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading: (state: ProductState, action: PayloadAction<null>) => {
      state.status = "loading";
    },
    failLoading: (state: ProductState, action: PayloadAction<{}>) => {
      state.status = "failed";
    },
    successLoading: (state: ProductState, action: PayloadAction<Product[]>) => {
      state.entities = (action.payload || []).reduce(
        (acc: Acc, product) => {
          acc[product.id] = product;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(action.payload || []).map(({ id }) => id)];

      state.status = "success";
    },
  },
});

export default productSlice;
