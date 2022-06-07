class Store {
    state = {};

    reducers = {};

    subscribers = {};

    constructor({reducers}) {
        this.reducers = reducers;
        this.makeAction();

        console.log('init state', JSON.stringify(this.state));
    }

    subscribe(key, callback) {
        this.subscribers[key] = callback;
        this.subscribers[key](this.state);
    }

    unsubscribe(key) {
        this.subscribers[key] = undefined;
    }

    dispatch(action) {
        this.makeAction(action)

        Object.values(this.subscribers).forEach((subscriber) => {
            typeof subscriber === 'function' && subscriber(this.state);
        });

        console.log(`state after dispatch ${action?.type || 'empty'}`, JSON.stringify(this.state));
    }

    makeAction(action) {
        Object.keys(this.reducers).forEach((reducerKey) => {
            this.state[reducerKey] = this.reducers[reducerKey](this.state[reducerKey], action);
        });
    }

}

export default Store;