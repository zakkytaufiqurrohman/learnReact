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
    status:false,
  }
  swicthNameHandler = (newName) => {
      this.setState({
        datas:[
          {name:newName,age:21},
          {name:'change name',age:22},
          {name:'budis',age:25}
        ],
      }
      )
  }
  changeHandler =(event)=>{
    this.setState({
      datas:[
        {name:'zakky',age:21},
        {name:this.state.datas[1].name,age:22},
        {name:event.target.value,age:25}
      ],
      status:false,
    })
  }
  showHide =()=>{
      this.setState({
          status:!this.state.status,
      })
  }

  deletePerson = (index)=>{
      const orang=this.state.datas;
      orang.splice(index,1);
      this.setState({
        datas:orang,
      })

  }
  render(){

    const css={
      backgroundColor:'red',
      padding:'8px',
      cursor:'pointer'
    }
    // 
    var Show =null;

    if(this.state.status){
      Show=(<div>
        {this.state.datas.map( (orang,index)=>{
          return <Person click={() =>this.deletePerson(index)} name={orang.name} age={orang.age}> my hobbi is<span className="warna" > coding</span></Person>
        })}
        {/* <Timer mulai={0}/> */}
      </div>
      );
    }
   

    return (
    
    <div className="App">

     
      {/* props */}
      {/* <Person name="zakky" age="21"> my hobbi is<span className="warna" > coding</span></Person>
      <Person name="andi" age="22" > my hobby adalah:reading</Person>
      <Person name="budi" age="23"/> */}
      <button onClick={this.showHide}>show hide</button>
      <button style={css} onClick={this.swicthNameHandler.bind(this,"paijo")}>click me</button>
      {/* state */}

      {Show}
     
    </div>
  )}


};

export default App;
