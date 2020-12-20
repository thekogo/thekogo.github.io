import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import appState from './counterStore';
const Counter = observer(({ appState }) => {
  return (
    <div>
      <h2>{appState.count}</h2>
      <button onClick={appState.incCounter} >Inc Counter</button>
      <button onClick={appState.decCounter} >Dec Counter</button>
    </div>
  )
})
ReactDOM.render(<Counter appState={appState} />, document.getElementById('root'));
