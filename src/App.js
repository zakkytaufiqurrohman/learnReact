// import React from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Timer from './Person/Timer'
class App extends Component {

  state={
    datas:[
      {name:'zakky',age:21},
      {name:'andi',age:22},
      {name:'budis',age:25}
    ],
  }
  swicthNameHandler = (newName) => {
      this.setState( {
        datas:[
          {name:newName,age:21},
          {name:'change name',age:22},
          {name:'budis',age:25}
        ]
      }
      )
  }
  changeHandler =(event)=>{
    this.setState({
      datas:[
        {name:'zakky',age:21},
        {name:this.state.datas[1].name,age:22},
        {name:event.target.value,age:25}
      ]
    })
  }
  render(){

    const css={
      backgroundColor:'red',
      padding:'8px',
      cursor:'pointer'
    }
  return (
    <div className="App">
      {/* props */}
      {/* <Person name="zakky" age="21"> my hobbi is<span className="warna" > coding</span></Person>
      <Person name="andi" age="22" > my hobby adalah:reading</Person>
      <Person name="budi" age="23"/> */}

      <button style={css} onClick={this.swicthNameHandler.bind(this,"paijo")}>click me</button>
      {/* state */}
      <Person name={this.state.datas[0].name} age={this.state.datas[0].age}> my hobbi is<span className="warna" > coding</span></Person>
      <Person name={this.state.datas[1].name} age={this.state.datas[1].name} > my hobby adalah:reading</Person>
      <Person 
        name={this.state.datas[2].name} 
        age={this.state.otherState}
        change={this.changeHandler}
      />
      <Timer mulai={0}/>
    </div>
  )}


};

export default App;
