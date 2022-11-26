declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    basket: import("./basket").BasketState;
    restaurant: import("./restaurant").RestaurantState;
    product: import("./product").ProductState;
    review: import("./review").ReviewState;
    user: import("./user").UserState;
}>, import("redux").AnyAction>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    basket: import("./basket").BasketState;
    restaurant: import("./restaurant").RestaurantState;
    product: import("./product").ProductState;
    review: import("./review").ReviewState;
    user: import("./user").UserState;
}>, import("redux").AnyAction, (((store: any) => (next: any) => (action: any) => void) | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    basket: import("./basket").BasketState;
    restaurant: import("./restaurant").RestaurantState;
    product: import("./product").ProductState;
    review: import("./review").ReviewState;
    user: import("./user").UserState;
}>, import("redux").AnyAction, undefined>)[]>;
export declare type AppDispatch = typeof store.dispatch;
export declare type RootState = ReturnType<typeof rootReducer>;
export {};
