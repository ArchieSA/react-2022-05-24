export default Store;
declare class Store {
    constructor({ reducers }: {
        reducers: any;
    });
    state: {};
    reducers: {};
    subscribers: {};
    subscribe(key: any, callback: any): void;
    unsubscribe(key: any): void;
    dispatch(action: any): void;
    makeAction(action: any): void;
}
