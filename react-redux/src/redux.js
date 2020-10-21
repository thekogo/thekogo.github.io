const redux = require('redux');

const initialState = {
    counter: 0,
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_COUNTER":
            return {...state, counter: state.counter + action.value}
        case "INCREASE_COUNTER":
            return {...state, counter: state.counter + 1}
        default:
            return state;
    }
}

// store
const store = redux.createStore(reducer);
console.log(store.getState());

// action
action = {
    type:"ADD_COUNTER",
    value: 5
}

// subscription
store.subscribe(() => {
    console.log(`[Subscription] ${store.getState()}`)
})

// store.dispatch(action)
store.dispatch({type: "INCREASE_COUNTER"})
console.log(store.getState());
store.dispatch(action)
console.log(store.getState());
