class Store {
    state = {};

    reducers = {};

    subscribers = {};

    constructor({ reducers}){
        // this.state = initialState || {};
        this.reducers = reducers;
        this.makeAction();

        console.log(this.state)

    }

    subscribe(key, callback){
        this.subscribers[key] = callback;
    }

    
    unsubscribe(key){
        this.subscribers[key] = undefined;
    }

    dispatch (action) {
        this.makeAction(action)

        Object.values(this.subscribers).forEach((subscriber) => {
            typeof subscriber === 'function' && subscriber(this.state)
        })

        console.log(`state after dispathc ${action.type || 'empty'}`, this.state)
    }

    makeAction(action) {
        Object.keys(this.reducers).forEach( (reducerKey) => {
            this.state[reducerKey] = this.reducers[reducerKey](this.state, action);
        })
    }
}

export default Store;