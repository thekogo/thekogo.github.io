import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return state = 0;
        default:
            return state;
    }
}

export default function ExampleReducer() {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div style={{ textAlign: 'center' }}>
            {state}
            <div>
                <button onClick={() => dispatch({ type: "increment" })}> + </button>
                <button onClick={() => dispatch({ type: "decrement" })}> - </button>
                <button onClick={() => dispatch({ type: "reset" })}> reset </button>
            </div>
        </div>
    )
}
