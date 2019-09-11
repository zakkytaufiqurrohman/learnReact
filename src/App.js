// import React from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component() {
  // state cannot be use inside a function componen
  // state object must be used inside a class componen
  // a functional uses prop.xxxx
  // and a class uses this.state.xxx
  state={
    datas:[
      {name:'zakky',age:21},
      {name:'andi',age:22},
      {name:'budis',age:25}
    ]
  }
  render(){
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

      

      {/* props */}
      {/* <Person name="zakky" age="21"> my hobbi is<span className="warna" > coding</span></Person>
      <Person name="andi" age="22" > my hobby adalah:reading</Person>
      <Person name="budi" age="23"/> */}

      {/* state */}
      <Person name={this.datas[0].name} age={this.datas[0].age}> my hobbi is<span className="warna" > coding</span></Person>
      <Person name={this.datas[1].name} age={this.datas[1].name} > my hobby adalah:reading</Person>
      <Person name={this.datas[2].name} age={this.datas[2].name}/>

     
    </div>
  )};
}
export default App;
