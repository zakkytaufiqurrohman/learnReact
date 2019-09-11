// import React from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header> */}
      <Person name="zakky" age="21"/>
      <Person name="andi" age="22" > my hobby adalah:reading</Person>
      <Person name="budi" age="23"/>
     
    </div>
  );
}
export default App;
