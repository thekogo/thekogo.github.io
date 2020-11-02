import React, { useState } from 'react';
import arrow from './arrow.png'

export function TodoList() {

    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [done, setDone] = useState([]);

    const handleDone = (idx) => {
        let data = [...list];
        let move = data.splice(idx, 1);
        setDone([...done, ...move]);
        setList(data);
    }

    const handleAddList = () => {
        setList([...list, text]);
        setText("");
    }

    const handleDelete = (idx) => {
        let data = [...done];
        data.splice(idx, 1);
        setDone(data)
    }

    const handleBack = (idx) => {
        let data = [...done];
        let move = data.splice(idx, 1);
        setDone(data);
        setList([...list, move]);
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 300px', justifyItems: 'center', gap: '10px', margin: 'auto' }}>
            <div>
                <div>
                    <h3>Todo List</h3>
                    <ul style={{ listStyle: "none" }}>
                        {
                            list.map((item, idx) => <li>${item} <span onClick={() => handleDone(idx)}>
                                <img src={arrow} style={{ width: '15px', verticalAlign: 'center' }} /></span></li>)
                        }
                    </ul>
                    <div>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={() => handleAddList()}>add text</button>
                    </div>
                </div>
            </div>
            <div>
                <h3>Done</h3>
                <ul style={{ listStyle: "none" }}>
                    {
                        done.map((item, idx) => <li>{item}
                            <span>
                                <button onClick={() => handleDelete(idx) }>Delete</button>
                                <button onClick={() => handleBack(idx) }>back</button>
                            </span>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
