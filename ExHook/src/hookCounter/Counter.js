import React, { useState } from 'react'

export function Counter() {

    const [count, setCounter] = useState(0);
    console.log(useState(0));

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>{count}</h3>
            <div>
                <button onClick={() => setCounter(count + 1)}>plus</button>
                <button onClick={() => setCounter(count - 1)}>minus</button>
                <button onClick={() => setCounter(0)}>reset</button>
            </div>
        </div>
    )
}
