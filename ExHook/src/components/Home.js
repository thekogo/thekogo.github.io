import React, { useContext } from 'react'
import Context, { Context2 } from '../Context';

export default function Home() {

    const { state, setState } = useContext(Context2)

    console.log(useContext(Context));
    return (
        <div>
            <div>
                <h1>Test Context = {state[0].content}</h1>
                <button onClick={() => setState([{content: "Hi people"}])}>Change word</button>
            </div>
        </div>
    )
}
