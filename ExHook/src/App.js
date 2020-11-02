import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todoClass/todo'
import { Switch, Route } from 'react-router-dom'
import { Counter } from './hookCounter/Counter'
import { TodoList } from './todoHook/TodoList'
import Home from './components/Home'
import Context, { Context2 } from './Context'
import ExampleReducer from './components/ExampleReducer';

function App() {

  const [state, setState] = useState([{ content: "hello world" }])

  return (
    <Switch>
      <Route exact path='/'><div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Todo />
        </header>
      </div> </Route>
      <Route path="/hook">
        <Counter />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
      <Route path="/home">
        <Context2.Provider value={{ state, setState }}>
          <Home />
        </Context2.Provider>
      </Route>
      <Route path="/ex" >
        <ExampleReducer />
      </Route>
    </Switch>

  );
}

export default App;
