// import React from 'react';
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App =props => {

  const [data,setdata]= useState({
      datas:[
        {name:'zakky',age:21},
        {name:'andi',age:22},
        {name:'budis',age:25}
      ],
      // other: 'ini other yang di replace oleh data baru jika other tdk di definisikan'
  });
  // karena sifatnya mereplace all variable di datas maka gunakan code ini
  const [otherdata,setOtherData]=useState('ini data other tidak ke replace data baru');
 
  console.log(data,otherdata);
  const swicthNameHandler = () => {
      setdata( {
        datas:[
          {name:'nama ini setelah di rubah',age:21},
          {name:'change name',age:22},
          {name:'budis',age:25}
        ]
      }
      )
  }
  
  return (
    <div className="App">
      {/* props */}
      {/* <Person name="zakky" age="21"> my hobbi is<span className="warna" > coding</span></Person>
      <Person name="andi" age="22" > my hobby adalah:reading</Person>
      <Person name="budi" age="23"/> */}

      <button onClick={swicthNameHandler}>click me</button>
      {/* state */}
      <Person name={data.datas[0].name} age={data.datas[0].age}> my hobbi is<span className="warna" > coding</span></Person>
      <Person name={data.datas[1].name} age={data.datas[1].name} > my hobby adalah:reading</Person>
      <Person name={data.datas[2].name} age={data.otherState} />
    </div>
  )};

export default App;
