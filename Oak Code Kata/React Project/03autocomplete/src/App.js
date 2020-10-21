import React, { useState } from 'react';
import logo from './logo.svg';
import countries from './Countries';
import './App.css';

function App() {

  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.filter(country => regex.test(country)).sort()
    }
    setSuggestions(suggestions);
    setText(value)
  }

  const selectedText = (value) => {
    setText(value);
    setSuggestions([])
  }

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul >
        {
          suggestions.map((item, index) => (<li key={index} onClick={() => selectedText(item)}>{item}</li>))
        }
      </ul>
    );
  }

  return (
    <div id="notebooks">
      <h2>Auto Completed</h2>
      <input id="query" type="text" onChange={onTextChange} value={text} />
      {renderSuggestions()}
      <span>Suggestions: {suggestions.length}</span>
    </div>
  );
}

export default App;
