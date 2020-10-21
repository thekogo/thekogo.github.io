import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  AddHistory = (e) => {
    e.preventDefault();
    this.props.addHistory({ type: "ADD_HISTORY", name: this.props.state.txtName, email: this.props.state.txtEmail })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={() => this.props.plus({ type: "INCREMENT" })}> + </button>
            <button onClick={() => this.props.minus({ type: "DECREMENT" })}> - </button>
            <button onClick={() => this.props.reset({ type: "RESET" })}> reset </button>
            <button onClick={() => this.props.addNum({ type: "ADD_NUM", num: this.props.data })}> addNum </button>
            <button onClick={() => this.props.addPerson({ type: "ADD_PERSON" })}> addPerson </button>
          </div>
          <ul>
            {this.props.state.arr.map((num, idx) => <li key={idx}>{num}</li>)}
            {this.props.state.arrObj.map((obj, idx) => (obj.name ? obj.email ? <li key={obj.name}>name : {obj.name} email : {obj.email}</li> : <li key={obj.name}>name : {obj.name} email: No Email</li> : null))}
          </ul>
          <form onSubmit={this.AddHistory} >
            <input type="text" placeholder="name" onChange={(e) => this.props.txtName({ type: "TEXT_NAME", txtName: e.target.value })} value={this.props.state.txtName} />
            <input type="text" placeholder="email" onChange={(e) => this.props.txtEmail({ type: "TEXT_EMAIL", txtEmail: e.target.value })} value={this.props.state.txtEmail} />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.count,
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: (action) => {
      dispatch(action);
    },
    minus: (action) => {
      dispatch(action);
    },
    reset: (action) => {
      dispatch(action);
    },
    addNum: (action) => {
      dispatch(action);
    },
    addPerson: (action) => {
      dispatch(action);
    },
    addHistory: (action) => {
      dispatch(action)
    },
    txtName: (action) => {
      dispatch(action);
    },
    txtEmail: (action) => {
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
