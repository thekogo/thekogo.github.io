import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import SearchForm from './SearchForm';
import './App.css'

const Header = () => {
  return (
    <div className="jumbotron">
      <h1>Github Search App</h1>
      <h2>Search users in GitHub using this simple React application.</h2>
      <p>Click on the card to see more detail about individual user. The search default is nsebhastian (me!)</p>
    </div>
  );
};

const Profiles = props => {
  if (props.data) {
    let data = props.data;
    if (data.message === 'Not Found')
      return (
        <div className="notfound">
          <h2>Oops !!!</h2>
          <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
        </div>
      );
    else {
      // map the users into JSX elements
      let userList = data.items.map((name) => {
        return (
          <a key={name.id} href={name.html_url} target="blank">
            <div className="box">
              <img className="user" src={name.avatar_url} alt={`${name.login}`} />
              <div>
                <h4>Username : {name.login}</h4>
                <p> Url : {name.html_url}</p>
                <p> Score : {name.score} </p>
              </div>
            </div>
          </a>
        );
      })
      // then render it
      return (
        <div>{userList}</div>
      );
    }
  }
  else {
    return <div>Fetching data . . .</div>
  }
}

const API = 'https://api.github.com/';

function App() {

  const searchText = 'thekogo'
  const [data, setData] = useState('')

  const fetchSearch = username => {
    let url = `${API}search/users?q=${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.log('Oops! . There Is A Problem' + error))
  }

  useEffect(() => {
    fetchSearch(searchText)
  }, [])

  return (
    <div className="container">
      <Header />
      <SearchForm
        fetchSearch={fetchSearch}
      />
      <Profiles
        data={data}
      />
    </div>
  );
}

export default App;
